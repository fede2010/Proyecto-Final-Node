# 🖥️ API TalentoTech — Proyecto Final Node.js

API REST para gestión de productos de una tienda de componentes de PC.
Autenticación JWT, CRUD de productos y validación de datos.

**API en producción:** [https://proyecto-final-node-rho.vercel.app](https://proyecto-final-node-rho.vercel.app)

---

<table>
<tr>
<td width="50%">

### 🛠️ Stack
- **Runtime:** Node.js
- **Base de datos:** Firebase (Firestore)
- **Deploy:** Vercel

</td>
<td width="50%">

### 📦 Instalación y ejecución

1. Clonar el repositorio
   ```bash
   git clone https://github.com/fede2010/Proyecto-Final-Node.git
   cd "Proyecto-Final-Node/src"
   ```
2. Instalar dependencias
   ```bash
   pnpm install
   ```
3. Configurar `.env` en `src/`
4. Ejecutar
   ```bash
   pnpm start
   ```

</td>
</tr>
</table>

---

## 🔑 Credenciales de prueba

| Campo | Valor |
|-------|-------|
| Email | admin@gmail.com |
| Password | 123456 |

> Usar el endpoint `POST /auth/login` para obtener el token.

---

## 🚀 Endpoints

### Auth
| Método | Ruta             | Auth   | Descripción          |
|--------|------------------|--------|----------------------|
| POST   | /auth/login      | No     | Login y obtener token|

### Products
| Método | Ruta                  | Auth   | Descripción          |
|--------|-----------------------|--------|----------------------|
| GET    | /api/products         | Sí     | Listar productos     |
| GET    | /api/products/:id     | Sí     | Obtener producto     |
| POST   | /api/products/create  | Sí     | Crear producto       |
| DELETE | /api/products/:id     | Sí     | Eliminar producto    |

> Los endpoints de products requieren header: `Authorization: Bearer <token>`

---

## 📋 Dependencias

| Paquete | Versión | Uso |
|---------|---------|-----|
| express | ^5.2.1 | Framework web |
| firebase | ^12.15.0 | Base de datos (Firestore) |
| jsonwebtoken | ^9.0.3 | Autenticación JWT |
| cors | ^2.8.6 | Habilitar CORS |
| body-parser | ^2.3.0 | Parseo de JSON en requests |
| dotenv | ^17.4.2 | Variables de entorno |

---

## 📄 Estructura de datos

<table>
<tr>
<td width="50%">

### User
| Campo | Tipo | Descripción |
|-------|------|-------------|
| email | string | Email del usuario |
| password | string | Contraseña |

</td>
<td width="50%">

### Product
| Campo | Tipo | Descripción |
|-------|------|-------------|
| name | string | Nombre del producto |
| category | string | Categoría (GPU, CPU...) |
| description | string | Descripción del producto |
| price | number | Precio |
| stock | number | Stock disponible |

</td>
</tr>
</table>

---

## 📁 Estructura del proyecto

```
src/
├── config/        # Configuración de Firebase
├── controllers/   # Lógica de cada ruta
├── middlewares/    # Auth middleware (JWT)
├── models/        # Acceso a Firestore
├── routes/        # Definición de endpoints
├── services/      # Lógica de negocio
└── index.js       # Entry point
```
