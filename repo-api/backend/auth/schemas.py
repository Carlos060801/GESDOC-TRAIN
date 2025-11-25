from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import date
from enum import Enum


# =========================================================
# ENUMS (deben coincidir con los usados en models.py)
# =========================================================

class DocumentTypeEnum(str, Enum):
    POLICY = "POLICY"
    PROCEDURE = "PROCEDURE"
    GUIDE = "GUIDE"
    OTHER = "OTHER"


class ModalityTrainingEnum(str, Enum):
    ONLINE = "ONLINE"
    IN_PERSON = "IN_PERSON"
    HYBRID = "HYBRID"


class AttendanceStatusEnum(str, Enum):
    PRESENT = "PRESENT"
    ABSENT = "ABSENT"
    LATE = "LATE"


# =========================================================
# SCHEMAS BASE GENERALES
# =========================================================

class RoleBase(BaseModel):
    name_role: str
    description_role: Optional[str]


class RoleCreate(RoleBase):
    pass


class RoleOut(RoleBase):
    id: int

    class Config:
        orm_mode = True


# =========================================================
# USER (SIN PASSWORD)
# =========================================================

class UserBase(BaseModel):
    name_user: str
    email_user: EmailStr


class UserCreate(UserBase):
    password_user: str


class UserOut(UserBase):
    id: int
    status: Optional[bool]

    class Config:
        orm_mode = True


# =========================================================
# EMPLOYEE
# =========================================================

class EmployeeBase(BaseModel):
    document_number: str
    first_name: str
    last_name: str
    position_employee: str
    department_employee: str


class EmployeeCreate(EmployeeBase):
    user_id: int


class EmployeeOut(EmployeeBase):
    id: int
    user: Optional[UserOut]

    class Config:
        orm_mode = True


# =========================================================
# CATEGORY
# =========================================================

class CategoryBase(BaseModel):
    name_category: str
    description_category: Optional[str]


class CategoryCreate(CategoryBase):
    pass


class CategoryOut(CategoryBase):
    id: int

    class Config:
        orm_mode = True


# =========================================================
# DOCUMENT
# =========================================================

class DocumentBase(BaseModel):
    name_document: str
    description_document: Optional[str]
    version_document: Optional[str]
    observation_document: Optional[str]
    publication_date: Optional[date]
    document_type: DocumentTypeEnum
    file_url: Optional[str]
    category_id: int


class DocumentCreate(DocumentBase):
    pass


class DocumentOut(DocumentBase):
    id: int
    category: Optional[CategoryOut]

    class Config:
        orm_mode = True


# =========================================================
# TRAINING
# =========================================================

class TrainingBase(BaseModel):
    name_training: str
    description_training: Optional[str]
    duration_minutes: int
    date_training: date
    modality_training: ModalityTrainingEnum


class TrainingCreate(TrainingBase):
    pass


class TrainingOut(TrainingBase):
    id: int

    class Config:
        orm_mode = True


# =========================================================
# TRAINING_DOCUMENT
# =========================================================

class TrainingDocumentBase(BaseModel):
    training_id: int
    document_id: int


class TrainingDocumentCreate(TrainingDocumentBase):
    pass


class TrainingDocumentOut(TrainingDocumentBase):
    id: int

    class Config:
        orm_mode = True


# =========================================================
# TRAINING ATTENDANCE
# =========================================================

class TrainingAttendanceBase(BaseModel):
    employee_id: int
    training_id: int
    attendance_date: date
    attendance_status: AttendanceStatusEnum
    observation: Optional[str]


class TrainingAttendanceCreate(TrainingAttendanceBase):
    pass


class TrainingAttendanceOut(TrainingAttendanceBase):
    id: int

    class Config:
        orm_mode = True
