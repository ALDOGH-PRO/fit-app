import { useMemo } from "react";

function Rendimiento({ volver, habitos, setHabitos }) {
  const diasSemana = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes"
  ];

  function toggleDia(index) {
    const base = Array(5).fill(false);
    const safeHabitos = habitos?.length === 5 ? habitos : base;

    const nuevo = [...safeHabitos];
    nuevo[index] = !nuevo[index];

    setHabitos(nuevo);
  }

  const completados = habitos?.filter(Boolean).length || 0;

  const porcentaje = useMemo(() => {
    return Math.round((completados / 5) * 100);
  }, [completados]);

  const cardStyle = {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "15px",
    marginBottom: "20px",
    border: "1px solid #00ff88"
  };

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
        fontFamily: "Arial"
      }}
    >
      <button
        onClick={volver}
        style={{
          background: "#00ff88",
          border: "none",
          padding: "12px 20px",
          borderRadius: "10px",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        ⬅ Volver
      </button>

      <h1 style={{ textAlign: "center", color: "#00ff88", marginBottom: "30px" }}>
        ⚡ Rendimiento Real
      </h1>

      {/* PROGRESO REAL */}
      <div style={cardStyle}>
        <h2>📊 Progreso semanal</h2>
        <h1 style={{ color: "#00ff88" }}>{porcentaje}%</h1>
        <p>{completados} de 5 entrenamientos completados</p>
      </div>

      {/* DÍAS */}
      <div style={cardStyle}>
        <h2>📅 Semana</h2>

        {diasSemana.map((dia, i) => (
          <div
            key={i}
            onClick={() => toggleDia(i)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "10px",
              border: "1px solid #00ff88",
              background: habitos?.[i] ? "#00ff8820" : "transparent",
              cursor: "pointer"
            }}
          >
            <span>{dia}</span>
            <span>{habitos?.[i] ? "✅ Hecho" : "❌ Pendiente"}</span>
          </div>
        ))}
      </div>

      {/* RESUMEN */}
      <div style={cardStyle}>
        <h2>🔥 Resumen</h2>
        <p>✔️ Entrenamientos: {completados}/5</p>
        <p>📈 Constancia: {porcentaje}%</p>
      </div>
    </div>
  );
}

export default Rendimiento;