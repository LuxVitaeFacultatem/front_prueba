
# **Sistema de Transporte - Frontend**

Este proyecto es el frontend del sistema de transporte, desarrollado con **Angular**. La aplicación permite gestionar vehículos, conductores y sus asociaciones, así como realizar acciones como crear, listar, asociar y desasociar registros.

---

## **Tecnologías Utilizadas**

- **Framework:** Angular (v18)
- **Librerías de Estilo:** Bootstrap 5
- **Lenguaje:** TypeScript
- **Herramienta de Construcción:** Angular CLI

---

### **Características**

- **Gestión de Vehículos:**
  - Listar todos los vehículos registrados.
  - Crear nuevos registros de vehículos.
- **Gestión de Conductores:**
  - Listar todos los conductores registrados.
  - Crear nuevos registros de conductores.
- **Asociación:**
  - Asociar conductores a vehículos disponibles.
  - Desasociar conductores de vehículos asignados.

---

### **Requisitos Previos**

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

- **Node.js** (v16 o superior) y **npm**
- Angular CLI (v18 o superior): Puedes instalarlo con:

  ```bash
  npm install -g @angular/cli
  ```

- Un navegador moderno (Chrome, Firefox, Edge, etc.)

---

### **Instalación**

1. Clona el repositorio:

   ```bash
   git clone https://github.com/LuxVitaeFacultatem/front_prueba.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd front_prueba
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

---

### **Configuración**

Si tu aplicación requiere una configuración específica para conectarse al backend, actualiza el archivo `app.config.ts` en la carpeta `src/app/app.config.ts/`.

Ejemplo:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

---

### **Ejecución en Desarrollo**

Para iniciar el servidor de desarrollo, usa:

```bash
ng serve
```

Abre tu navegador y accede a:

```
http://localhost:4200
```
