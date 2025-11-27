from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import Base, engine
from auth.router import router as auth_router

# Crear las tablas si no existen
Base.metadata.create_all(bind=engine)

app = FastAPI()

# ================================
# CORS para permitir el frontend
# ================================
origins = [
    "http://localhost:5173",   # Vite
    "http://localhost:3000",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ================================
# RUTAS
# ================================

@app.get("/")
def root():
    return {"mensaje": "API GESDOC-TRAIN corriendo correctamente 🚀"}

# incluir rutas de autenticación
app.include_router(auth_router)
