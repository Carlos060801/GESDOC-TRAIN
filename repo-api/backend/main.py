from fastapi import FastAPI
from database import Base, engine
from auth.router import router as auth_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="GESDOC & TRAIN API")

app.include_router(auth_router)
