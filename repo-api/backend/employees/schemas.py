from pydantic import BaseModel

class EmployeeBase(BaseModel):
    document_number: str
    first_name: str
    last_name: str
    position_employee: str
    department_employee: str

class EmployeeCreate(EmployeeBase):
    pass

class EmployeeOut(EmployeeBase):
    id_employee: int

    class Config:
        orm_mode = True
