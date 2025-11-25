// src/pages/LoginPage.jsx
import React, { useState } from "react";
import "./login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1 className="login-title">GESDOC & TRAIN</h1>
        <p className="login-subtitle">Bienvenido de vuelta</p>

        <form onSubmit={handleLogin}>

          {/* Usuario */}
          <label className="login-label">Usuario</label>
          <div className="input-group">
            <span className="input-icon">👤</span>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Contraseña */}
          <label className="login-label">Contraseña</label>
          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Recordarme */}
          <div className="remember-row">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Recordarme</label>
          </div>

          <button className="login-btn" type="submit">
            Iniciar Sesión
          </button>
        </form>

        <a className="forgot" href="#">¿Olvidaste tu contraseña?</a>

        <p className="register-text">
          ¿No tienes cuenta? <a className="register-link" href="#">Registrarse</a>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
