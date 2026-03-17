# Node.js HTTP Server Project

A simple Node.js web server built using the **native `http` and `fs` modules** with modern **ES Module (ESM)** syntax. This project demonstrates basic routing, file serving, and error handling without external frameworks.

---

## 📁 Project Structure

```
project-root/
│── server.js      # Main server file
│── home.html      # Home page
│── 404.html       # Custom 404 error page
│── package.json   # Project configuration (ES Modules enabled)
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js v18+** (ES Modules supported)

### Installation & Run

```bash
npm install
node server.js
```

The server will start on:

```
http://localhost:3000
```

---

## 🌐 Available Web Pages & Routes

### 🏠 Home Page
- **URL:** `/`
- **File Served:** `home.html`
- **Description:**
  - The main landing page of the application
  - Served using the Node.js `fs` module
  - Demonstrates serving static HTML files

Example:
```
http://localhost:3000/
```

---

### ℹ️ About Page
- **URL:** `/about`
- **Response Type:** Plain text
- **Description:**
  - Simple endpoint handled directly inside the request handler
  - Demonstrates basic routing without file I/O

Example:
```
http://localhost:3000/about
```

---

### 🚫 404 Error Page
- **URL:** Any undefined route
- **File Served:** `404.html`
- **HTTP Status:** `404 Not Found`
- **Description:**
  - Displays a custom HTML error page when a route is not found
  - Contains a **“Go back home”** link that redirects users to `/`

Example:
```
http://localhost:3000/this-page-does-not-exist
```

---

## ⚙️ Technologies Used

- **Node.js** (Core Modules Only)
  - `http` – Create and run the HTTP server
  - `fs` – Read and serve HTML files
  - `path` & `url` – Resolve paths in ES Modules

---

## ✅ Features

- ES6 `import` syntax (ES Modules)
- Custom routing logic
- Static HTML file serving
- Custom 404 error handling
- No external dependencies

---

## 📌 Notes

- Ensure `"type": "module"` is set in `package.json`
- Designed for learning and lightweight server use
- Easy to extend with additional routes or static assets

---

## 📄 License

This project is provided for educational purposes and may be freely modified or extended.
