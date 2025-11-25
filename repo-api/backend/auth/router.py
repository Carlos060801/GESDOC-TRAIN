from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from auth.schemas import RegisterSchema, LoginSchema
from auth.service import register_user, login_user

router = APIRouter(prefix="/auth", tags=["Auth"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/register")
def register(data: RegisterSchema, db: Session = Depends(get_db)):
    result = register_user(db, data)
    if not result:
        raise HTTPException(status_code=400, detail="El correo ya está registrado")

    token, user = result
    return {"token": token, "user": user.name_user}


@router.post("/login")
def login(data: LoginSchema, db: Session = Depends(get_db)):
    result = login_user(db, data)
    if not result:
        raise HTTPException(status_code=400, detail="Credenciales incorrectas")

    token, user = result
    return {"token": token, "user": user.name_user}
