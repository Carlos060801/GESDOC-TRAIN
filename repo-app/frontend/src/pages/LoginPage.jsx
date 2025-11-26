import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importamos useNavigate para redirigir

const LoginPage = () => {
  const navigate = useNavigate(); // Hook para redirigir
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState(null); // Estado para manejar errores
  const [loading, setLoading] = useState(false); // Estado de carga

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 1. Hacemos la petición a tu Backend Python
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      // 2. Verificamos la respuesta
      const data = await response.json();

      if (response.ok) {
        console.log("✅ Login exitoso:", data);
        alert("¡Bienvenido " + data.usuario.nombre + "!");
        
        // Guardar datos en localStorage (Sesión básica)
        localStorage.setItem("usuario", JSON.stringify(data.usuario));
        localStorage.setItem("token", data.token);

        // Redirigir al Dashboard (Asegúrate que la ruta exista en tu router)
        navigate("/dashboard"); 
      } else {
        setError(data.detail || "Error al iniciar sesión");
      }

    } catch (err) {
      console.error("Error de conexión:", err);
      setError("No se pudo conectar con el servidor. Revisa si el Backend está corriendo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">GESDOC & TRAIN</h1>
        <p className="auth-subtitle">Bienvenido de vuelta</p>

        {/* Mostrar error si existe */}
        {error && <div style={{ color: "red", marginBottom: "1rem", textAlign: "center" }}>⚠️ {error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">

          <label className="auth-label">
            Usuario (Email)
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

          <button type="submit" className="auth-btn-primary" disabled={loading}>
            {loading ? "Verificando..." : "Iniciar Sesión"}
          </button>

          <div className="auth-links">
            <a href="#" className="auth-link">
              ¿Olvidaste tu contraseña?
            </a>

            <p className="auth-register-text">
              ¿No tienes cuenta?{" "}
              <Link to="/register" className="auth-link-strong">
                Registrarse
              </Link>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;
