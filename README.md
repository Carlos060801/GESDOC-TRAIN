# 📅 APLICACIÓN WEB GESDOC & TRAIN
**Aplicación web con base a la aplicación movil del ICBF** 
--------------------------------------------------
## 📅 Información General
**Sistemas Distribuido** 

* Universidad: Corporación Universitaria CORHUILA & Instituto de Bienestar Familiar 
* Materia: Sistemas Distribuidos 
* Fecha de Inicio: 19/11/25             Fecha de Culminación: 28/11/25
* Estudiante: Carlos Daniel Culma Perdomo & Johan Verjan
* Profesor: Jesús Ariel Gonzales & Julian Quimbayo
---------------------------------------------------
## 🧾 Descripción
El proyecto consiste en el desarrollo de una **aplicación Web** diseñada para apoyar la **Documentación en base a la aplicación movil**, cuyo propósito es brindar información, interacción y acompañamiento a los asistentes en tiempo real.
--------------------------------------------------------
El sistema busca facilitar:
* brindar la Información de cada politica que tiene el Instituto de Bienestar familiar en la feria del 17 de octubre.
* ÉL envío de la notificación en tiempo real de la encuesta realizada en la App de los participantes dentro de la feria.
* La recompilación de los datos sobre la asistencia y la participación de los usuarios. 
----------------------------------------------------------
## 🎯 Objetivo General
Desarrollar un sistema web distribuido que permita gestionar de forma eficiente las políticas institucionales, documentos, categorías, entrenamientos y usuarios, garantizando disponibilidad, seguridad y accesibilidad desde cualquier dispositivo.
## 🎯 Objetivos Específicos
1. Implementar un módulo para la gestión documental: carga, consulta, categorización y actualización de políticas institucionales.  
2. Desarrollar un sistema para la administración de entrenamientos, incluyendo listado de cursos, documentos requeridos y asistencia.  
3. Construir una arquitectura distribuida usando FastAPI + PostgreSQL + React (Vite) dentro de contenedores Docker para favorecer portabilidad y despliegue.
------------------------------------------------------------
## ⚙️ Tecnologías y Arquitectura
| Componente                 | Tecnología                                                        |
| -------------------------- | ----------------------------------------------------------------- |
| **Frontend**               | React + Vite + TypeScript + CSS                                   |
| **Backend**                | FastAPI (Python)                                                  |
| **Base de Datos**          | PostgreSQL                                                        |
| **Contenedores**           | Docker / Docker Compose                                           |
| **Autenticación**          | JWT                                                               |
| **Estilo de Arquitectura** | Cliente – Servidor                                                |
| **Metodología**            | Scrum / Ágil                                                      |
| **DevOps**                 | GitHub Actions (CI/CD), SonarQube (Calidad), Versionado por ramas |
-----------------------------------------------------------------------------------------------------
## 📂 Estructura del Repositorio
Practica-ICBF/
docs:
# Manuales y documentación Con Diapositivas
# arquitectura
# Proyecto
-----------------------------------
# 📱 SIGE - Sistema de Gestión del Bienestar Familiar

Proyecto desarrollado para la **Institución Bienestar Familiar (ICBF)** con el objetivo
de comunicar las **Misión, Visión y sus políticas y objetivos institucionales** a los nuevos integrantes del bienestar,
a través de una **aplicación móvil interactiva** con chatbot y acceso a información de los 7 pilares:

- Política de Calidad  
- Política Ambiental  
- SGSI (Seguridad de la Información)  
- Riesgos  
- Tratamiento de Datos Personales  
- SST (Seguridad y Salud en el Trabajo)  
- Bienestar  

---

## 🧩 Arquitectura del Proyecto

El sistema se basa en una arquitectura **distribuida**:
- **Frontend móvil:** Flutter (Dart)
- **Backend / Servicios:** Git Cloud + APIs REST
- **Chatbot:** Módulo integrado de asistencia a nuevos usuarios
- **Repositorio:** GitHub (código base y documentación)
- **Almacenamiento externo:** Google Drive (proyecto completo)

---

## 🚀 Instalación y Ejecución

> ⚠️ Debido al peso del proyecto, el código fuente completo se encuentra en Google Drive.

1. Descarga la aplicación completa desde:
   👉 [Descargar SIGE - Google Drive](https://drive.google.com/file/d/1uzvrhwR4T-QGUw40IEtltTaQTNruiznr/view?usp=sharing)

2. Descomprime el archivo ZIP.  
3. Abre la carpeta en VS Code o Android Studio.  
4. Ejecuta el siguiente comando:
   ```bash
   flutter pub get
   flutter run
