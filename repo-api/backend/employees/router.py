from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from .schemas import EmployeeCreate, EmployeeOut
from .service import create_employee, get_employees

router = APIRouter(
    prefix="/api/employees",
    tags=["Employees"]
)

@router.post("/", response_model=EmployeeOut)
def create(data: EmployeeCreate, db: Session = Depends(get_db)):
    return create_employee(db, data)

@router.get("/", response_model=list[EmployeeOut])
def get_all(db: Session = Depends(get_db)):
    return get_employees(db)
