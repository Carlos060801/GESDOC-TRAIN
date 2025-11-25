from sqlalchemy import (
    Column, Integer, String, Boolean, Date, Text,
    ForeignKey, Enum
)
from sqlalchemy.orm import relationship
from database import Base
import enum


# =========================================================
# ENUMS DEL SQL — Convertidos a Python Enum
# =========================================================

class DocumentTypeEnum(str, enum.Enum):
    POLICY = "POLICY"
    PROCEDURE = "PROCEDURE"
    GUIDE = "GUIDE"
    OTHER = "OTHER"


class ModalityTrainingEnum(str, enum.Enum):
    ONLINE = "ONLINE"
    IN_PERSON = "IN_PERSON"
    HYBRID = "HYBRID"


class AttendanceStatusEnum(str, enum.Enum):
    PRESENT = "PRESENT"
    ABSENT = "ABSENT"
    LATE = "LATE"


# =========================================================
# TABLE: role
# =========================================================

class Role(Base):
    __tablename__ = "role"

    id = Column(Integer, primary_key=True, index=True)
    name_role = Column(String(255))
    description_role = Column(String(255))
    created_at = Column(String)
    updated_at = Column(String)
    deleted_at = Column(String)
    status = Column(Boolean)

    # relación inversa con role_assignment
    role_assignments = relationship("RoleAssignment", back_populates="role")


# =========================================================
# TABLE: user
# =========================================================

class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    name_user = Column(String(255))
    email_user = Column(String(200), unique=True)
    password_user = Column(String(255))
    created_at = Column(String)
    updated_at = Column(String)
    deleted_at = Column(String)
    status = Column(Boolean)

    # Relaciones
    employee = relationship("Employee", back_populates="user", uselist=False)
    role_assignments = relationship("RoleAssignment", back_populates="user")


# =========================================================
# TABLE: category
# =========================================================

class Category(Base):
    __tablename__ = "category"

    id = Column(Integer, primary_key=True, index=True)
    name_category = Column(String(100))
    description_category = Column(String(255))
    created_at = Column(String)
    updated_at = Column(String)
    deleted_at = Column(String)
    status = Column(Boolean)

    # relación con document
    documents = relationship("Document", back_populates="category")


# =========================================================
# TABLE: document
# =========================================================

class Document(Base):
    __tablename__ = "document"

    id = Column(Integer, primary_key=True, index=True)
    name_document = Column(String(150))
    description_document = Column(Text)
    version_document = Column(String(255))
    observation_document = Column(Text)
    publication_date = Column(Date)
    document_type = Column(Enum(DocumentTypeEnum))
    file_url = Column(String(255))
    category_id = Column(Integer, ForeignKey("category.id"))
    created_at = Column(String)
    updated_at = Column(String)
    deleted_at = Column(String)
    status = Column(Boolean)

    # Relaciones
    category = relationship("Category", back_populates="documents")
    training_documents = relationship("TrainingDocument", back_populates="document")


# =========================================================
# TABLE: training
# =========================================================

class Training(Base):
    __tablename__ = "training"

    id = Column(Integer, primary_key=True, index=True)
    name_training = Column(String(150))
    description_training = Column(Text)
    duration_minutes = Column(Integer)
    date_training = Column(Date)
    modality_training = Column(Enum(ModalityTrainingEnum))
    created_at = Column(String)
    updated_at = Column(String)
    deleted_at = Column(String)
    status = Column(Boolean)

    # Relaciones
    training_documents = relationship("TrainingDocument", back_populates="training")
    training_attendance = relationship("TrainingAttendance", back_populates="training")


# =========================================================
# TABLE: employee
# =========================================================

class Employee(Base):
    __tablename__ = "employee"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("user.id"))
    document_number = Column(String(20))
    first_name = Column(String(100))
    last_name = Column(String(100))
    position_employee = Column(String(100))
    department_employee = Column(String(100))
    created_at = Column(String)
    updated_at = Column(String)
    deleted_at = Column(String)
    status = Column(Boolean)

    # Relaciones
    user = relationship("User", back_populates="employee")
    attendance_records = relationship("TrainingAttendance", back_populates="employee")


# =========================================================
# TABLE: role_assignment
# =========================================================

class RoleAssignment(Base):
    __tablename__ = "role_assignment"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("user.id"))
    role_id = Column(Integer, ForeignKey("role.id"))
    created_at = Column(String)
    updated_at = Column(String)
    deleted_at = Column(String)
    status = Column(Boolean)

    user = relationship("User", back_populates="role_assignments")
    role = relationship("Role", back_populates="role_assignments")


# =========================================================
# TABLE: training_document
# =========================================================

class TrainingDocument(Base):
    __tablename__ = "training_document"

    id = Column(Integer, primary_key=True, index=True)
    training_id = Column(Integer, ForeignKey("training.id"))
    document_id = Column(Integer, ForeignKey("document.id"))
    created_at = Column(String)
    updated_at = Column(String)
    deleted_at = Column(String)
    status = Column(Boolean)

    training = relationship("Training", back_populates="training_documents")
    document = relationship("Document", back_populates="training_documents")


# =========================================================
# TABLE: training_attendance
# =========================================================

class TrainingAttendance(Base):
    __tablename__ = "training_attendance"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"))
    training_id = Column(Integer, ForeignKey("training.id"))
    attendance_date = Column(Date)
    attendance_status = Column(Enum(AttendanceStatusEnum))
    observation = Column(Text)
    created_at = Column(String)
    updated_at = Column(String)
    deleted_at = Column(String)
    status = Column(Boolean)

    employee = relationship("Employee", back_populates="attendance_records")
    training = relationship("Training", back_populates="training_attendance")
