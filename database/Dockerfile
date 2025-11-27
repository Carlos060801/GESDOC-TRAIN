FROM postgres:15

# Variables necesarias para crear la BD
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=gesdoc_train

# Copiar archivo SQL
COPY init.sql /docker-entrypoint-initdb.d/
