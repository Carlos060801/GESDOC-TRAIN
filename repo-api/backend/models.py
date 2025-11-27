from sqlalchemy import (
    Column, Integer, String, Text, Date,
    ForeignKey, TIMESTAMP
)
from sqlalchemy.orm import relationship
from database import Base


# =========================================================
# TABLE: role
# =========================================================
class Role(Base):
    __tablename__ = "role"

    id_role = Column(Integer, primary_key=True, index=True)
    name_role = Column(String(255))
    description_role = Column(String(255))
    created_at = Column(TIMESTAMP)
    updated_at = Column(TIMESTAMP)
    deleted_at = Column(TIMESTAMP)
    status = Column(Integer)

    # Relación inversa
    role_assignments = relationship("RoleAssignment", back_populates="role")


# =========================================================
# TABLE: user
# =========================================================
class User(Base):
    __tablename__ = "user"

    id_user = Column(Integer, primary_key=True, index=True)
    name_user = Column(String(255))
    email_user = Column(String(200), unique=True)
    password_user = Column(String(255))
    created_at = Column(TIMESTAMP)
    updated_at = Column(TIMESTAMP)
    deleted_at = Column(TIMESTAMP)
    status = Column(Integer)

    employee = relationship("Employee", back_populates="user", uselist=False)
    role_assignments = relationship("RoleAssignment", back_populates="user")


# =========================================================
# TABLE: role_assignment
# =========================================================
class RoleAssignment(Base):
    __tablename__ = "role_assignment"

    user_id_user = Column(Integer, ForeignKey("user.id_user"), primary_key=True)
    role_id_role = Column(Integer, ForeignKey("role.id_role"), primary_key=True)
    created_at = Column(TIMESTAMP)
    updated_at = Column(TIMESTAMP)
    deleted_at = Column(TIMESTAMP)
    status = Column(Integer)

    user = relationship("User", back_populates="role_assignments")
    role = relationship("Role", back_populates="role_assignments")


# =========================================================
# TABLE: employee
# =========================================================
class Employee(Base):
    __tablename__ = "employee"

    id_employee = Column(Integer, primary_key=True, index=True)
    user_id_user = Column(Integer, ForeignKey("user.id_user"))
    document_number = Column(String(20))
    first_name = Column(String(100))
    last_name = Column(String(100))
    position_employee = Column(String(100))
    department_employee = Column(String(100))
    created_at = Column(TIMESTAMP)
    updated_at = Column(TIMESTAMP)
    deleted_at = Column(TIMESTAMP)
    status = Column(Integer)

    user = relationship("User", back_populates="employee")
    attendance_records = relationship("TrainingAttendance", back_populates="employee")


# =========================================================
# TABLE: category
# =========================================================
class Category(Base):
    __tablename__ = "category"

    id_category = Column(Integer, primary_key=True, index=True)
    name_category = Column(String(100))
    description_category = Column(String(255))
    created_at = Column(TIMESTAMP)
    updated_at = Column(TIMESTAMP)
    deleted_at = Column(TIMESTAMP)
    status = Column(Integer)

    documents = relationship("Document", back_populates="category")


# =========================================================
# TABLE: document
# =========================================================
class Document(Base):
    __tablename__ = "document"

    id_document = Column(Integer, primary_key=True, index=True)
    name_document = Column(String(150))
    description_document = Column(Text)
    version_document = Column(String(20))
    observation_document = Column(Text)
    publication_date = Column(Date)
    document_type = Column(String(50))
    file_url = Column(String(255))

    category_idcategory = Column(Integer, ForeignKey("category.id_category"))

    created_at = Column(TIMESTAMP)
    updated_at = Column(TIMESTAMP)
    deleted_at = Column(TIMESTAMP)
    status = Column(Integer)

    category = relationship("Category", back_populates="documents")
    training_documents = relationship("TrainingDocument", back_populates="document")


# =========================================================
# TABLE: training
# =========================================================
class Training(Base):
    __tablename__ = "training"

    id_training = Column(Integer, primary_key=True, index=True)
    name_training = Column(String(150))
    description_training = Column(Text)
    duration_minutes = Column(Integer)
    date_training = Column(Date)
    modality_training = Column(String(50))

    created_at = Column(TIMESTAMP)
    updated_at = Column(TIMESTAMP)
    deleted_at = Column(TIMESTAMP)
    status = Column(Integer)

    training_documents = relationship("TrainingDocument", back_populates="training")
    training_attendance = relationship("TrainingAttendance", back_populates="training")


# =========================================================
# TABLE: training_attendance
# =========================================================
class TrainingAttendance(Base):
    __tablename__ = "training_attendance"

    idtraining_attendance = Column(Integer, primary_key=True, index=True)
    employee_id_employee = Column(Integer, ForeignKey("employee.id_employee"))
    training_id_training = Column(Integer, ForeignKey("training.id_training"))
    attendance_date = Column(Date)
    attendance_status = Column(String(50))
    observation = Column(Text)

    created_at = Column(TIMESTAMP)
    updated_at = Column(TIMESTAMP)
    deleted_at = Column(TIMESTAMP)
    status = Column(Integer)

    employee = relationship("Employee", back_populates="attendance_records")
    training = relationship("Training", back_populates="training_attendance")


# =========================================================
# TABLE: training_documents
# =========================================================
class TrainingDocument(Base):
    __tablename__ = "training_documents"

    training_idtraining = Column(Integer, ForeignKey("training.id_training"), primary_key=True)
    document_iddocument = Column(Integer, ForeignKey("document.id_document"), primary_key=True)

    created_at = Column(TIMESTAMP)
    updated_at = Column(TIMESTAMP)
    deleted_at = Column(TIMESTAMP)
    status = Column(Integer)

    training = relationship("Training", back_populates="training_documents")
    document = relationship("Document", back_populates="training_documents")
