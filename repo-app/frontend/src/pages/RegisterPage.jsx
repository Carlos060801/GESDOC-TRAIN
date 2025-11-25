import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de registro:", form);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1 className="auth-title">Crear Cuenta</h1>
        <p className="auth-subtitle">Únete a GESDOC & TRAIN</p>

        <form onSubmit={handleSubmit} className="auth-form">

          {/* Nombre */}
          <label className="auth-label">Nombre Completo</label>
          <div className="auth-input-wrapper">
            <span className="auth-input-icon">👤</span>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre completo"
              className="auth-input"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <label className="auth-label">Correo Electrónico</label>
          <div className="auth-input-wrapper">
            <span className="auth-input-icon">📧</span>
            <input
              type="email"
              name="email"
              placeholder="correo@ejemplo.com"
              className="auth-input"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Contraseña */}
          <label className="auth-label">Contraseña</label>
          <div className="auth-input-wrapper">
            <span className="auth-input-icon">🔒</span>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="auth-input"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirmación */}
          <label className="auth-label">Confirmar Contraseña</label>
          <div className="auth-input-wrapper">
            <span className="auth-input-icon">🔒</span>
            <input
              type="password"
              name="confirm"
              placeholder="Repite tu contraseña"
              className="auth-input"
              value={form.confirm}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="auth-btn-primary">
            Registrarse
          </button>

          <div className="auth-links">
            <p className="auth-register-text">
              ¿Ya tienes una cuenta?{" "}
              <Link className="auth-link-strong" to="/login">
                Iniciar Sesión
              </Link>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
