import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate(); // Para redirigir al login
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
    setLoading(true);

    // 1. Validación: Contraseñas iguales
    if (form.password !== form.confirm) {
      setError("Las contraseñas no coinciden");
      setLoading(false);
      return;
    }

    try {
      // 2. Petición al Backend Python
      const response = await fetch("http://127.0.0.1:8000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name_user: form.name,        // Ajustamos al nombre que espera Pydantic
          email_user: form.email,
          password_user: form.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("¡Registro exitoso! Ahora inicia sesión.");
        navigate("/login"); // Redirigir al Login
      } else {
        setError(data.error || "Error al registrar usuario");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("No se pudo conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1 className="auth-title">Crear Cuenta</h1>
        <p className="auth-subtitle">Únete a GESDOC & TRAIN</p>

        {/* Mostrar alertas de error */}
        {error && (
          <div style={{ color: "red", textAlign: "center", marginBottom: "1rem" }}>
            ⚠️ {error}
          </div>
        )}

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

          <button type="submit" className="auth-btn-primary" disabled={loading}>
            {loading ? "Registrando..." : "Registrarse"}
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
