from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime
from database import SessionLocal
from models import User
from auth.schemas import UserCreate, UserOut
from auth.service import hash_password, verify_password

router = APIRouter(prefix="/auth", tags=["Authentication"])

# ============================
# DB Dependency
# ============================

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ============================
# REGISTRO
# ============================

@router.post("/register", response_model=UserOut)
def register_user(user: UserCreate, db: Session = Depends(get_db)):

    # Si existe el email, error
    existing_user = db.query(User).filter(User.email_user == user.email_user).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="El correo ya está registrado.")

    hashed_password = hash_password(user.password_user)

    new_user = User(
        name_user=user.name_user,
        email_user=user.email_user,
        password_user=hashed_password,
        created_at=datetime.utcnow().isoformat(),
        updated_at=None,
        deleted_at=None,
        status=True
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


# ============================
# LOGIN
# ============================

@router.post("/login")
def login(email: str, password: str, db: Session = Depends(get_db)):

    user = db.query(User).filter(User.email_user == email).first()

    if not user:
        raise HTTPException(status_code=401, detail="Usuario no encontrado.")

    if not verify_password(password, user.password_user):
        raise HTTPException(status_code=401, detail="Contraseña incorrecta.")

    return {
        "mensaje": "Login exitoso",
        "usuario": {
            "id": user.id,
            "nombre": user.name_user,
            "email": user.email_user
        }
    }
