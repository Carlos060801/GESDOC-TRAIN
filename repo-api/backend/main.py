from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from pydantic import BaseModel

from database import engine  # 👈 Usamos el engine central

app = FastAPI()

# --- CONFIGURACIÓN CORS (Para que React pueda conectarse) ---
origins = [
    "http://localhost:5173",  # Vite
    "http://localhost:3000",  # otros front
    "*"                       # solo desarrollo
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- MODELOS DE DATOS (Schemas) ---

class UserCreate(BaseModel):
    name_user: str
    email_user: str
    password_user: str

class UserLogin(BaseModel):
    email: str
    password: str

# --- RUTAS (Endpoints) ---

@app.get("/")
def read_root():
    return {"mensaje": "API GESDOC-TRAIN corriendo correctamente 🚀"}

@app.get("/usuarios")
def leer_usuarios():
    try:
        with engine.connect() as conn:
            # Usamos los nombres reales de la tabla
            result = conn.execute(
                text('SELECT id_user, name_user, email_user FROM "user"')
            )

            usuarios = []
            # .mappings() permite acceder por nombre de columna
            for row in result.mappings():
                usuarios.append({
                    "id": row["id_user"],
                    "name_user": row["name_user"],
                    "email_user": row["email_user"]
                })

            return {"usuarios": usuarios}
    except Exception as e:
        return {"error": str(e)}

@app.post("/usuarios")
def crear_usuario(usuario: UserCreate):
    try:
        # begin() abre transacción y hace commit automáticamente al salir
        with engine.begin() as conn:
            query = text("""
                INSERT INTO "user" (name_user, email_user, password_user)
                VALUES (:nombre, :email, :clave)
                RETURNING id_user, name_user, email_user
            """)
            result = conn.execute(query, {
                "nombre": usuario.name_user,
                "email": usuario.email_user,
                "clave": usuario.password_user   # ⚠️ en producción debe ir encriptada
            })

            nuevo_usuario = result.mappings().first()

            return {
                "mensaje": "Usuario creado",
                "usuario": {
                    "id": nuevo_usuario["id_user"],
                    "name_user": nuevo_usuario["name_user"],
                    "email_user": nuevo_usuario["email_user"]
                }
            }
    except Exception as e:
        return {"error": f"No se pudo crear: {str(e)}"}

@app.post("/login")
def login(user: UserLogin):
    try:
        with engine.connect() as conn:
            query = text("""
                SELECT id_user, name_user, email_user 
                FROM "user"
                WHERE email_user = :email AND password_user = :pass
            """)

            result = conn.execute(query, {
                "email": user.email,
                "pass": user.password
            })

            usuario_encontrado = result.mappings().first()

            if usuario_encontrado:
                return {
                    "mensaje": "Login exitoso",
                    "usuario": {
                        "id": usuario_encontrado["id_user"],
                        "nombre": usuario_encontrado["name_user"],
                        "email": usuario_encontrado["email_user"]
                    },
                    "token": "token_falso_para_pruebas_123"  # luego se cambia por JWT real
                }
            else:
                raise HTTPException(status_code=401, detail="Credenciales incorrectas")

    except Exception as e:
        if isinstance(e, HTTPException):
            raise e
        return {"error": str(e)}
