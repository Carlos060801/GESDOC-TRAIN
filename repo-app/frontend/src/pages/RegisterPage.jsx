import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name_user: "",
    email_user: "",
    password_user: "",
    confirm: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Validar contraseñas
    if (form.password_user !== form.confirm) {
      setError("Las contraseñas no coinciden.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:9000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name_user: form.name_user,
          email_user: form.email_user,
          password_user: form.password_user,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("¡Registro exitoso! Ahora inicia sesión.");
        navigate("/login");
      } else {
        setError(data.detail || data.error || "Error al registrar usuario.");
      }
    } catch (err) {
      setError("No se pudo conectar con el servidor.");
      console.error(err);
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
            <input
              type="text"
              name="name_user"
              className="auth-input"
              placeholder="Tu nombre"
              onChange={handleChange}
              value={form.name_user}
              required
            />
          </div>

          <label className="auth-label">Correo Electrónico</label>
          <div className="auth-input-wrapper">
            <input
              type="email"
              name="email_user"
              className="auth-input"
              placeholder="correo@ejemplo.com"
              onChange={handleChange}
              value={form.email_user}
              required
            />
          </div>

          <label className="auth-label">Contraseña</label>
          <div className="auth-input-wrapper">
            <input
              type="password"
              name="password_user"
              className="auth-input"
              placeholder="••••••••"
              onChange={handleChange}
              value={form.password_user}
              required
            />
          </div>

          <label className="auth-label">Confirmar Contraseña</label>
          <div className="auth-input-wrapper">
            <input
              type="password"
              name="confirm"
              className="auth-input"
              placeholder="Repite tu contraseña"
              onChange={handleChange}
              value={form.confirm}
              required
            />
          </div>

          <button type="submit" className="auth-btn-primary" disabled={loading}>
            {loading ? "Registrando..." : "Registrarse"}
          </button>

          <p className="auth-register-text">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="auth-link-strong">
              Iniciar Sesión
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
