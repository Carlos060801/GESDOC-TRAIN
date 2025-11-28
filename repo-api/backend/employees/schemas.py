from pydantic import BaseModel

class EmployeeBase(BaseModel):
    document_number: str
    first_name: str
    last_name: str
    position_employee: str
    department_employee: str


class EmployeeCreate(EmployeeBase):
    pass


class EmployeeUpdate(BaseModel):
    first_name: str | None = None
    last_name: str | None = None
    position_employee: str | None = None
    department_employee: str | None = None
    status: int | None = None


class EmployeeOut(EmployeeBase):
    id_employee: int

    class Config:
        orm_mode = True
