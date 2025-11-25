from sqlalchemy.orm import Session
from models import User
from passlib.context import CryptContext
from auth.schemas import RegisterSchema, LoginSchema
from config import JWT_SECRET, JWT_ALGORITHM
from jose import jwt

pwd = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
    return pwd.hash(password)

def verify_password(password: str, hashed: str):
    return pwd.verify(password, hashed)

def create_token(data: dict):
    return jwt.encode(data, JWT_SECRET, algorithm=JWT_ALGORITHM)

def register_user(db: Session, data: RegisterSchema):
    exists = db.query(User).filter(User.email_user == data.email).first()
    if exists:
        return None

    user = User(
        name_user=data.name,
        email_user=data.email,
        password_user=hash_password(data.password)
    )
    db.add(user)
    db.commit()
    db.refresh(user)

    token = create_token({"id": user.id, "email": user.email_user})
    return token, user

def login_user(db: Session, data: LoginSchema):
    user = db.query(User).filter(User.email_user == data.email).first()
    if not user:
        return None

    if not verify_password(data.password, user.password_user):
        return None

    token = create_token({"id": user.id, "email": user.email_user})
    return token, user
