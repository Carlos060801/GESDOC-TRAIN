FROM postgres:15

# Variables de entorno para PostgreSQL
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=gesdoc_train

# Copiar el archivo SQL de inicialización
COPY init.sql /docker-entrypoint-initdb.d/init.sql

# Ajustar permisos (buena práctica)
RUN chmod 755 /docker-entrypoint-initdb.d/init.sql
