# Repositorio de los trabajos de programacion web 2
## Programacion web 2 ICO-2026-II
### Profesor: AARON VELASCO AGUSTIN

[![Programacion](https://static.wikia.nocookie.net/animatorvsanimation/images/a/ae/AVCoding_2.jpg/revision/latest/scale-to-width-down/1200?cb=20250303014211)](https://www.youtube.com/watch?v=EFmxPMdBqmU)

---

# 🐾 Paws & Cross - Sistema de Gestión Clínica Veterinaria

**Paws & Cross** es una aplicación web de arquitectura Cliente-Servidor orientada a la gestión integral de clínicas veterinarias. Permite a los médicos veterinarios administrar de manera eficiente su agenda, el registro de pacientes caninos y sus respectivos historiales médicos, garantizando la seguridad y persistencia de los datos.

## 🧑‍⚕️ Descripción de Usuario (Funcionalidades)

El sistema está diseñado para facilitar el día a día en una clínica veterinaria mediante una interfaz intuitiva, rápida y fluida:

* **Autenticación Segura:** Sistema de registro e inicio de sesión para veterinarios. Incluye la función "Recordar" que guarda el correo localmente para agilizar futuros accesos.
* **Panel de Control (Dashboard):** Vista panorámica que muestra un calendario mensual y las citas programadas para el día actual.
* **Directorio de Pacientes:** Módulo CRUD (Crear, Leer, Actualizar, Eliminar) para dar de alta a nuevos perritos, registrando sus datos biométricos (raza, edad, peso).
* **Historial Médico Dinámico:** Tarjetas clínicas interactivas donde el médico puede actualizar los síntomas, modificar la fecha/hora de la cita y cambiar el estado clínico del paciente (*Tiene Cita*, *En Operación*, *Finalizado*).
* **Agenda y Notificaciones:** Calendario interactivo generado en tiempo real. Cuenta con un buscador global inteligente y una campana de notificaciones que alerta sobre las citas pendientes del día.

## ⚙️ Descripción Técnica (Arquitectura y Tecnologías)

El proyecto está construido bajo una arquitectura **RESTful API** utilizando tecnologías modernas de desarrollo web, sin depender de frameworks pesados de frontend para mantener la ligereza del sistema.

### Stack Tecnológico
* **Frontend (Cliente):**
    * HTML5 semántico.
    * **Vanilla JavaScript (ES6+):** Consumo de la API nativo mediante la función `fetch` (promesas `async/await`), manipulación del DOM y renderizado dinámico de componentes (como la grilla del calendario).
    * **Tailwind CSS:** Framework de utilidades para un diseño responsivo y moderno (inyectado vía CDN).
    * **LocalStorage API:** Para la persistencia de preferencias de usuario en el frontend.
* **Backend (Servidor):**
    * **Node.js & Express.js:** Servidor web rápido para enrutamiento de vistas y creación de endpoints de la API (`/api/v1/...`).
    * **Bcrypt:** Middleware de encriptación (hashing) para almacenar contraseñas de forma segura con generación de *salts*.
    * **Express-Session:** Gestión de estado y sesiones a nivel de servidor con cookies seguras (autenticación estricta en rutas protegidas).
* **Base de Datos:**
    * **MariaDB / MySQL:** Base de datos relacional para la persistencia de la información.
    * **Paquete `mysql2/promise`:** Implementación de consultas SQL preparadas (Prepared Statements) para prevenir inyecciones SQL.
* **Infraestructura:**
    * Preparado para despliegue en contenedores utilizando **Docker** y `docker-compose`.

## 📂 Estructura del Proyecto

```text
📦 ProgramacionWeb2_2708
 ┣ 📂 public               # Archivos estáticos servidos por Express (Frontend)
 ┃ ┣ 📜 dashboard.html     # Panel principal interactivo
 ┃ ┣ 📜 pacientes.html     # Directorio general
 ┃ ┣ 📜 historial.html     # Notas médicas y actualización de estado
 ┃ ┣ 📜 agenda.html        # Renderizado de calendario dinámico
 ┃ ┣ 📜 login.html         # Vista de inicio de sesión
 ┃ ┣ 📜 logindto.html      # Formulario de registro de veterinarios
 ┃ ┣ 📜 style.css / styles.css # Hojas de estilo puras para autenticación
 ┃ ┗ 📂 img                # Recursos gráficos (logos, avatares)
 ┣ 📜 server.js            # Lógica principal del Backend (Express, Rutas, Sesiones)
 ┣ 📜 schema.sql           # Script de creación de tablas de la base de datos (DDL)
 ┣ 📜 package.json         # Dependencias y scripts de Node.js
 ┗ 📜 README.md            # Documentación del repositorio
