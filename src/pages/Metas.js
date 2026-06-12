function Metas({ volver, peso, meta, calorias }) {
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

      <h1
        style={{
          textAlign: "center",
          color: "#00ff88",
          marginBottom: "30px"
        }}
      >
        🎯 Metas Personales
      </h1>

      <div style={styles.card}>
        <h2>⚖️ Peso Actual</h2>
        <p>{peso || "--"} kg</p>
      </div>

      <div style={styles.card}>
        <h2>🏆 Peso Objetivo</h2>
        <p>{meta || "--"} kg</p>
      </div>

      <div style={styles.card}>
        <h2>🔥 Calorías Diarias</h2>
        <p>{calorias || "--"}</p>
      </div>

      <div style={styles.card}>
        <h2>💪 Objetivo Semanal</h2>
        <p>Entrenar mínimo 5 días por semana</p>
      </div>

      <div style={styles.card}>
        <h2>🚀 Objetivo Mensual</h2>
        <p>Mejorar fuerza y condición física</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "15px",
    marginBottom: "20px",
    border: "1px solid #00ff88"
  }
};

export default Metas;