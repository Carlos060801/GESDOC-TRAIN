from sqlalchemy.orm import Session
from models import Employee
from .schemas import EmployeeCreate, EmployeeUpdate
from datetime import datetime

# ======================================
# 🔵 CREATE EMPLOYEE
# ======================================
def create_employee(db: Session, data: EmployeeCreate):
    new = Employee(
        document_number=data.document_number,
        first_name=data.first_name,
        last_name=data.last_name,
        position_employee=data.position_employee,
        department_employee=data.department_employee,
        created_at=datetime.now(),
        updated_at=datetime.now(),
        status=1
    )
    db.add(new)
    db.commit()
    db.refresh(new)
    return new


# ======================================
# 🔵 GET ALL EMPLOYEES
# ======================================
def get_employees(db: Session):
    return db.query(Employee).filter(Employee.deleted_at == None).all()


# ======================================
# 🔵 GET BY DOCUMENT NUMBER
# ======================================
def get_employee_by_document(db: Session, document_number: str):
    return db.query(Employee).filter(
        Employee.document_number == document_number,
        Employee.deleted_at == None
    ).first()


# ======================================
# 🔵 UPDATE EMPLOYEE
# ======================================
def update_employee(db: Session, emp_id: int, data: EmployeeUpdate):
    employee = db.query(Employee).filter(
        Employee.id_employee == emp_id,
        Employee.deleted_at == None
    ).first()

    if not employee:
        return None

    if data.first_name:
        employee.first_name = data.first_name

    if data.last_name:
        employee.last_name = data.last_name

    if data.position_employee:
        employee.position_employee = data.position_employee

    if data.department_employee:
        employee.department_employee = data.department_employee

    if data.status is not None:
        employee.status = data.status

    employee.updated_at = datetime.now()

    db.commit()
    db.refresh(employee)
    return employee


# ======================================
# 🔵 DELETE EMPLOYEE (SOFT DELETE)
# ======================================
def delete_employee(db: Session, emp_id: int):
    employee = db.query(Employee).filter(
        Employee.id_employee == emp_id,
        Employee.deleted_at == None
    ).first()

    if not employee:
        return None

    employee.deleted_at = datetime.now()
    db.commit()
    return employee
