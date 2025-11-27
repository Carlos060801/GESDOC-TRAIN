# repo-api/backend/main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from pydantic import BaseModel

from database import engine  # Engine configurado en database.py

app = FastAPI()

# ---------------- CORS ----------------
origins = [
    "http://localhost:5173",  # Front Vite
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --------- SCHEMAS (solo para auth simple) ---------
class UserCreate(BaseModel):
    name_user: str
    email_user: str
    password_user: str


class UserLogin(BaseModel):
    email: str
    password: str


# ---------------- RUTAS ----------------

@app.get("/")
def read_root():
    return {"mensaje": "API GESDOC-TRAIN corriendo correctamente 🚀"}


@app.get("/usuarios")
def leer_usuarios():
    try:
        with engine.connect() as conn:
            result = conn.execute(
                text('SELECT id_user, name_user, email_user FROM "user"')
            )
            usuarios = [
                {
                    "id_user": row.id_user,
                    "name_user": row.name_user,
                    "email_user": row.email_user,
                }
                for row in result
            ]
        return {"usuarios": usuarios}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/usuarios")
def crear_usuario(usuario: UserCreate):
    try:
        with engine.begin() as conn:
            # Verificar si ya existe el email
            existe = conn.execute(
                text('SELECT 1 FROM "user" WHERE email_user = :email'),
                {"email": usuario.email_user},
            ).first()

            if existe:
                raise HTTPException(
                    status_code=400,
                    detail="El correo ya está registrado",
                )

            query = text("""
                INSERT INTO "user" (name_user, email_user, password_user)
                VALUES (:nombre, :email, :clave)
                RETURNING id_user, name_user, email_user
            """)

            result = conn.execute(
                query,
                {
                    "nombre": usuario.name_user,
                    "email": usuario.email_user,
                    "clave": usuario.password_user,  # En proyecto real -> encriptar
                },
            )

            nuevo = result.first()

        return {
            "mensaje": "Usuario creado",
            "usuario": {
                "id_user": nuevo.id_user,
                "name_user": nuevo.name_user,
                "email_user": nuevo.email_user,
            },
        }

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/login")
def login(data: UserLogin):
    try:
        with engine.connect() as conn:
            query = text("""
                SELECT id_user, name_user, email_user
                FROM "user"
                WHERE email_user = :email AND password_user = :pass
            """)
            result = conn.execute(
                query,
                {"email": data.email, "pass": data.password},
            )
            user = result.first()

            if not user:
                raise HTTPException(status_code=401, detail="Credenciales incorrectas")

            return {
                "mensaje": "Login exitoso",
                "usuario": {
                    "id_user": user.id_user,
                    "name_user": user.name_user,
                    "email_user": user.email_user,
                },
                "token": "token_falso_para_pruebas_123",
            }

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
