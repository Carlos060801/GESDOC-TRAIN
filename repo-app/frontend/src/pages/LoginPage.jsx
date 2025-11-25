import React, { useState } from "react";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Credenciales:", form);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">GESDOC & TRAIN</h1>
        <p className="auth-subtitle">Bienvenido de vuelta</p>

        <form onSubmit={handleSubmit} className="auth-form">

          <label className="auth-label">
            Usuario
            <div className="auth-input-wrapper">
              <span className="auth-input-icon">👤</span>
              <input
                type="email"
                name="email"
                placeholder="correo@ejemplo.com"
                value={form.email}
                onChange={handleChange}
                className="auth-input"
                required
              />
            </div>
          </label>

          <label className="auth-label">
            Contraseña
            <div className="auth-input-wrapper">
              <span className="auth-input-icon">🔒</span>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                className="auth-input"
                required
              />
            </div>
          </label>

          <div className="auth-remember">
            <label>
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
              />{" "}
              Recordarme
            </label>
          </div>

          <button type="submit" className="auth-btn-primary">
            Iniciar Sesión
          </button>

          <div className="auth-links">
            <a href="#" className="auth-link">
              ¿Olvidaste tu contraseña?
            </a>
            <p className="auth-register-text">
              ¿No tienes cuenta?{" "}
              <a href="#" className="auth-link-strong">
                Registrarse
              </a>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;
