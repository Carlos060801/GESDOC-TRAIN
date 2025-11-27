FROM python:3.11-alpine

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

WORKDIR /app

RUN apk update && apk add --no-cache \
    build-base \
    gcc \
    musl-dev \
    libffi-dev \
    openssl-dev \
    postgresql-dev

RUN pip install --upgrade pip

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Exponer puerto interno 9000
EXPOSE 9000

# Ejecutar FastAPI en puerto interno 9000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "9000"]
