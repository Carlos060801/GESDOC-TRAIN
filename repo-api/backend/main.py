from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware # 👈 IMPORTANTE: Permisos para React
from sqlalchemy import create_engine, text
from pydantic import BaseModel
import os

app = FastAPI()

# --- CONFIGURACIÓN CORS (Para que React pueda conectarse) ---
origins = [
    "http://localhost:5173", # Puerto por defecto de Vite/React
    "http://localhost:3000", # Otro puerto común
    "*"                      # Permitir todo (solo para desarrollo)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Conexión a PostgreSQL (Docker)
DATABASE_URL = "postgresql://postgres:abcd1234@localhost:5432/midb"

try:
    engine = create_engine(DATABASE_URL)
    with engine.connect() as connection:
        print("✅ CONEXIÓN EXITOSA A POSTGRESQL")
except Exception as e:
    print(f"❌ Error: {e}")

# --- MODELOS DE DATOS (Schemas) ---

# Modelo para CREAR usuario
class UserCreate(BaseModel):
    name_user: str
    email_user: str
    password_user: str

# Modelo para LOGIN (Lo que envía React)
class UserLogin(BaseModel):
    email: str
    password: str

# --- RUTAS (Endpoints) ---

@app.get("/")
def read_root():
    return {"mensaje": "API conectada correctamente a Docker"}

@app.get("/usuarios")
def leer_usuarios():
    try:
        with engine.connect() as conn:
            result = conn.execute(text('SELECT * FROM "user"'))
            usuarios = []
            for row in result.fetchall():
                usuarios.append({
                    "id": row.id,
                    "name_user": row.name_user,
                    "email_user": row.email_user
                })
            return {"usuarios": usuarios}
    except Exception as e:
        return {"error": str(e)}

@app.post("/usuarios")
def crear_usuario(usuario: UserCreate):
    try:
        with engine.connect() as conn:
            query = text("""
                INSERT INTO "user" (name_user, email_user, password_user)
                VALUES (:nombre, :email, :clave)
                RETURNING id, name_user, email_user
            """)
            result = conn.execute(query, {
                "nombre": usuario.name_user, 
                "email": usuario.email_user, 
                "clave": usuario.password_user
            })
            conn.commit()
            nuevo_usuario = result.fetchone()
            return {"mensaje": "Usuario creado", "usuario": {"id": nuevo_usuario.id, "nombre": nuevo_usuario.name_user}}
    except Exception as e:
        return {"error": f"No se pudo crear: {str(e)}"}

# --- RUTA DE LOGIN (NUEVA) ---
@app.post("/login")
def login(user: UserLogin):
    try:
        with engine.connect() as conn:
            # Buscamos si existe un usuario con ese email y contraseña
            query = text("""
                SELECT id, name_user, email_user 
                FROM "user" 
                WHERE email_user = :email AND password_user = :pass
            """)
            
            result = conn.execute(query, {
                "email": user.email, 
                "pass": user.password
            })
            
            usuario_encontrado = result.fetchone()

            if usuario_encontrado:
                return {
                    "mensaje": "Login exitoso",
                    "usuario": {
                        "id": usuario_encontrado.id,
                        "nombre": usuario_encontrado.name_user,
                        "email": usuario_encontrado.email_user
                    },
                    "token": "token_falso_para_pruebas_123" # Aquí iría el JWT real
                }
            else:
                # Si no encuentra nada, lanzamos error 401 (No autorizado)
                raise HTTPException(status_code=401, detail="Credenciales incorrectas")
                
    except Exception as e:
        if isinstance(e, HTTPException):
            raise e
        return {"error": str(e)}
