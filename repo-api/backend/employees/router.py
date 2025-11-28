from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db

from .schemas import (
    EmployeeCreate,
    EmployeeUpdate,
    EmployeeOut
)

from .service import (
    create_employee,
    get_employees,
    get_employee_by_document,
    update_employee,
    delete_employee
)

router = APIRouter(
    prefix="/api/employees",
    tags=["Employees"]
)

# ======================================
# 🔵 CREATE EMPLOYEE
# ======================================
@router.post("/", response_model=EmployeeOut)
def create(data: EmployeeCreate, db: Session = Depends(get_db)):
    return create_employee(db, data)


# ======================================
# 🔵 GET ALL EMPLOYEES
# ======================================
@router.get("/", response_model=list[EmployeeOut])
def all(db: Session = Depends(get_db)):
    return get_employees(db)


# ======================================
# 🔵 GET EMPLOYEE BY DOCUMENT NUMBER
# ======================================
@router.get("/document/{document_number}", response_model=EmployeeOut)
def find_by_document(document_number: str, db: Session = Depends(get_db)):
    emp = get_employee_by_document(db, document_number)
    if not emp:
        raise HTTPException(404, "Empleado no encontrado")
    return emp


# ======================================
# 🔵 UPDATE EMPLOYEE
# ======================================
@router.put("/{emp_id}", response_model=EmployeeOut)
def update(emp_id: int, data: EmployeeUpdate, db: Session = Depends(get_db)):
    emp = update_employee(db, emp_id, data)
    if not emp:
        raise HTTPException(404, "Empleado no encontrado")
    return emp


# ======================================
# 🔵 DELETE EMPLOYEE (SOFT DELETE)
# ======================================
@router.delete("/{emp_id}")
def delete(emp_id: int, db: Session = Depends(get_db)):
    emp = delete_employee(db, emp_id)
    if not emp:
        raise HTTPException(404, "Empleado no encontrado")
    return {"detail": "Empleado eliminado correctamente"}
