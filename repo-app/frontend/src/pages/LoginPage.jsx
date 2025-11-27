import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email_user: "",
    password_user: "",
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

    try {
      const response = await fetch(
        `http://localhost:9000/auth/login?email=${form.email_user}&password=${form.password_user}`,
        {
          method: "POST",
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Bienvenido " + data.usuario.nombre);

        // Guardar sesión
        localStorage.setItem("usuario", JSON.stringify(data.usuario));

        navigate("/dashboard");
      } else {
        setError(data.detail || "Error al iniciar sesión");
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

        <h1 className="auth-title">GESDOC & TRAIN</h1>
        <p className="auth-subtitle">Bienvenido de vuelta</p>

        {error && (
          <div style={{ color: "red", marginBottom: "1rem" }}>
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">

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

          <button type="submit" className="auth-btn-primary" disabled={loading}>
            {loading ? "Verificando..." : "Iniciar Sesión"}
          </button>

          <p className="auth-register-text">
            ¿No tienes cuenta?{" "}
            <Link to="/register" className="auth-link-strong">
              Registrarse
            </Link>
          </p>

        </form>

      </div>
    </div>
  );
};

export default LoginPage;
