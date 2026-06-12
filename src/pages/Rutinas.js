function Rutinas({ volver, objetivo }) {
  const cardStyle = {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "15px",
    marginBottom: "20px",
    border: "1px solid #00ff88",
    boxShadow: "0px 4px 15px rgba(0,255,136,0.2)"
  };

  const botonVolver = {
    background: "#00ff88",
    color: "#000",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    marginBottom: "25px"
  };

  let titulo = "";
  let descripcion = "";

  if (objetivo === "Perder grasa") {
    titulo = "🔥 Plan Quema Grasa";
    descripcion =
      "Entrenamiento enfocado en gasto calórico y resistencia.";
  }

  if (objetivo === "Ganar músculo") {
    titulo = "💪 Plan Hipertrofia";
    descripcion =
      "Entrenamiento enfocado en crecimiento muscular.";
  }

  if (objetivo === "Mantener peso") {
    titulo = "⚖️ Plan Mantenimiento";
    descripcion =
      "Entrenamiento equilibrado para conservar tu forma física.";
  }

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
      <button onClick={volver} style={botonVolver}>
        ⬅ Volver al Dashboard
      </button>

      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "15px",
          marginBottom: "25px",
          border: "1px solid #00ff88"
        }}
      >
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
      </div>

      {/* PERDER GRASA */}
      {objetivo === "Perder grasa" && (
        <>
          <div style={cardStyle}>
            <h2>🏃 Cardio</h2>
            <p>Caminata rápida - 30 min</p>
            <p>Bicicleta - 20 min</p>
            <p>Burpees - 4x15</p>
          </div>

          <div style={cardStyle}>
            <h2>🔥 Circuito Funcional</h2>
            <p>Sentadillas - 4x20</p>
            <p>Flexiones - 4x15</p>
            <p>Mountain Climbers - 4x30 seg</p>
          </div>

          <div style={cardStyle}>
            <h2>💪 Core</h2>
            <p>Plancha - 4x45 seg</p>
            <p>Crunches - 4x20</p>
            <p>Elevación de piernas - 4x15</p>
          </div>
        </>
      )}

      {/* GANAR MUSCULO */}
      {objetivo === "Ganar músculo" && (
        <>
          <div style={cardStyle}>
            <h2>💪 Pecho</h2>
            <p>Press banca - 5x8</p>
            <p>Press inclinado - 4x10</p>
            <p>Aperturas - 4x12</p>
          </div>

          <div style={cardStyle}>
            <h2>🦵 Pierna</h2>
            <p>Sentadilla - 5x8</p>
            <p>Prensa - 4x10</p>
            <p>Peso muerto - 4x6</p>
          </div>

          <div style={cardStyle}>
            <h2>💥 Brazos</h2>
            <p>Curl bíceps - 4x10</p>
            <p>Curl martillo - 4x10</p>
            <p>Fondos tríceps - 4x12</p>
          </div>
        </>
      )}

      {/* MANTENER PESO */}
      {objetivo === "Mantener peso" && (
        <>
          <div style={cardStyle}>
            <h2>⚖️ Entrenamiento General</h2>
            <p>Press banca - 4x12</p>
            <p>Dominadas - 4x10</p>
            <p>Sentadilla - 4x12</p>
          </div>

          <div style={cardStyle}>
            <h2>🏃 Cardio Moderado</h2>
            <p>Trote - 20 min</p>
            <p>Bicicleta - 15 min</p>
            <p>Caminata - 20 min</p>
          </div>

          <div style={cardStyle}>
            <h2>💪 Fuerza Complementaria</h2>
            <p>Press militar - 3x12</p>
            <p>Remo con barra - 3x12</p>
            <p>Fondos - 3x12</p>
          </div>
        </>
      )}

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          color: "#94a3b8"
        }}
      >
        💪 La disciplina supera a la motivación.
      </div>
    </div>
  );
}

export default Rutinas;