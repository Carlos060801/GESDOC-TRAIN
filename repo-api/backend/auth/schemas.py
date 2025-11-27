from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    name_user: str
    email_user: EmailStr
    password_user: str

class UserOut(BaseModel):
    id: int
    name_user: str
    email_user: EmailStr
    status: bool | None = True

    class Config:
        orm_mode = True
