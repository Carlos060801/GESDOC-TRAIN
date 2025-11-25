from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
from jose import jwt
from database import SessionLocal
from models import User
from auth.service import hash_password, verify_password
from auth.schemas import UserCreate, UserOut
import os

router = APIRouter(prefix="/auth", tags=["Authentication"])

# ------------------------------
# JWT CONFIG
# ------------------------------

SECRET_KEY = "GESDOCTRAIN_SUPER_KEY_2025"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60


def create_access_token(data: dict, expires_delta: int = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(
        minutes=expires_delta or ACCESS_TOKEN_EXPIRE_MINUTES
    )
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


# ------------------------------
# DB DEPENDENCY
# ------------------------------

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ------------------------------
# REGISTRO
# ------------------------------

@router.post("/register", response_model=UserOut)
def register_user(user: UserCreate, db: Session = Depends(get_db)):

    # verificar si ya existe el email
    db_user = db.query(User).filter(User.email_user == user.email_user).first()
    if db_user:
        raise HTTPException(
            status_code=400,
            detail="El correo ya está registrado.",
        )

    new_user = User(
        name_user=user.name_user,
        email_user=user.email_user,
        password_user=hash_password(user.password_user),
        created_at=datetime.utcnow().isoformat(),
        status=True
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


# ------------------------------
# LOGIN
# ------------------------------

@router.post("/login")
def login(email: str, password: str, db: Session = Depends(get_db)):

    user = db.query(User).filter(User.email_user == email).first()

    if not user:
        raise HTTPException(status_code=401, detail="Usuario no encontrado.")

    if not verify_password(password, user.password_user):
        raise HTTPException(status_code=401, detail="Contraseña incorrecta.")

    # Generar JWT
    access_token = create_access_token({"sub": user.email_user})

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "id": user.id,
            "name": user.name_user,
            "email": user.email_user,
        }
    }
