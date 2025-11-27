import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (form.password !== form.confirm) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);

    try {
      const response = await registerUser({
        name_user: form.name,
        email_user: form.email,
        password_user: form.password,
      });

      alert("✔️ Registro exitoso, ya puedes iniciar sesión");
      navigate("/login");

    } catch (err) {
      console.error(err);
      setError("No se pudo registrar el usuario.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Crear Cuenta</h1>
        <p className="auth-subtitle">Únete a GESDOC & TRAIN</p>

        {error && (
          <div style={{ color: "red", textAlign: "center", marginBottom: "1rem" }}>
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">

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

          <label className="auth-label">Contraseña</label>
          <div className="auth-input-wrapper">
            <span className="auth-input-icon">🔒</span>
            <input
              type="password"
              name="password"
              className="auth-input"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <label className="auth-label">Confirmar Contraseña</label>
          <div className="auth-input-wrapper">
            <span className="auth-input-icon">🔒</span>
            <input
              type="password"
              name="confirm"
              className="auth-input"
              value={form.confirm}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="auth-btn-primary" disabled={loading}>
            {loading ? "Registrando..." : "Registrarse"}
          </button>

          <p className="auth-register-text">
            ¿Ya tienes cuenta? <Link to="/login">Iniciar Sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
