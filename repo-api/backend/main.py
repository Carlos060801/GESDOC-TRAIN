from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import Base, engine
from auth.router import router as auth_router

# Crear tablas
Base.metadata.create_all(bind=engine)

app = FastAPI(title="GESDOC & TRAIN API")

# =====================================================
# CORS PARA PERMITIR QUE REACT SE CONECTE AL BACKEND
# =====================================================
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =====================================================
# INCLUIR LOS ROUTERS
# =====================================================
app.include_router(auth_router)
