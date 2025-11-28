from sqlalchemy.orm import Session
from models import Employee
from .schemas import EmployeeCreate
from datetime import datetime

def create_employee(db: Session, data: EmployeeCreate):
    new_emp = Employee(
        document_number=data.document_number,
        first_name=data.first_name,
        last_name=data.last_name,
        position_employee=data.position_employee,
        department_employee=data.department_employee,
        created_at=datetime.now(),
        updated_at=datetime.now(),
        status=1
    )
    db.add(new_emp)
    db.commit()
    db.refresh(new_emp)
    return new_emp

def get_employees(db: Session):
    return db.query(Employee).all()
