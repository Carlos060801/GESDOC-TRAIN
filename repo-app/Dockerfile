FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer puerto de Vite
EXPOSE 5173

# Ejecutar Vite (modo dev) accesible desde Docker
CMD ["npm", "run", "dev", "--", "--host"]
