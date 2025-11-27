-- 1. Tabla de Roles
CREATE TABLE IF NOT EXISTS role (
    id_role SERIAL PRIMARY KEY,
    name_role VARCHAR(255),
    description_role VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,
    status INT DEFAULT 1
);

-- 2. Tabla de Usuarios (User es palabra reservada, por eso las comillas)
CREATE TABLE IF NOT EXISTS "user" (
    id_user SERIAL PRIMARY KEY,
    name_user VARCHAR(255),
    email_user VARCHAR(200) UNIQUE,
    password_user VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,
    status INT DEFAULT 1
);

-- 3. Asignación de Roles
CREATE TABLE IF NOT EXISTS role_assignment (
    user_id_user INT,
    role_id_role INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,
    status INT DEFAULT 1,
    PRIMARY KEY (user_id_user, role_id_role),
    FOREIGN KEY (user_id_user) REFERENCES "user"(id_user),
    FOREIGN KEY (role_id_role) REFERENCES role(id_role)
);

-- 4. Empleados
CREATE TABLE IF NOT EXISTS employee (
    id_employee SERIAL PRIMARY KEY,
    user_id_user INT,
    document_number VARCHAR(20),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    position_employee VARCHAR(100),
    department_employee VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,
    status INT DEFAULT 1,
    FOREIGN KEY (user_id_user) REFERENCES "user"(id_user)
);

-- 5. Categorías de Documentos
CREATE TABLE IF NOT EXISTS category (
    id_category SERIAL PRIMARY KEY,
    name_category VARCHAR(100),
    description_category VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,
    status INT DEFAULT 1
);

-- 6. Documentos
CREATE TABLE IF NOT EXISTS document (
    id_document SERIAL PRIMARY KEY,
    name_document VARCHAR(150),
    description_document TEXT,
    version_document VARCHAR(20),
    observation_document TEXT,
    publication_date DATE,
    document_type VARCHAR(50),
    file_url VARCHAR(255),
    category_idcategory INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,
    status INT DEFAULT 1,
    FOREIGN KEY (category_idcategory) REFERENCES category(id_category)
);

-- 7. Capacitaciones (Training)
CREATE TABLE IF NOT EXISTS training (
    id_training SERIAL PRIMARY KEY,
    name_training VARCHAR(150),
    description_training TEXT,
    duration_minutes INT,
    date_training DATE,
    modality_training VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,
    status INT DEFAULT 1
);

-- 8. Asistencia a Capacitaciones
CREATE TABLE IF NOT EXISTS training_attendance (
    idtraining_attendance SERIAL PRIMARY KEY,
    employee_id_employee INT,
    training_id_training INT,
    attendance_date DATE,
    attendance_status VARCHAR(50),
    observation TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,
    status INT DEFAULT 1,
    FOREIGN KEY (employee_id_employee) REFERENCES employee(id_employee),
    FOREIGN KEY (training_id_training) REFERENCES training(id_training)
);

-- 9. Documentos de Capacitación (Relación muchos a muchos)
CREATE TABLE IF NOT EXISTS training_documents (
    training_idtraining INT,
    document_iddocument INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,
    status INT DEFAULT 1,
    FOREIGN KEY (training_idtraining) REFERENCES training(id_training),
    FOREIGN KEY (document_iddocument) REFERENCES document(id_document)
);

-- INSERTAR UN USUARIO ADMIN DE PRUEBA
INSERT INTO "user" (name_user, email_user, password_user) 
VALUES ('Admin', 'admin@admin.com', 'admin123')
ON CONFLICT (email_user) DO NOTHING;