function Objetivo({ seleccionar }) {
  const estiloBoton = {
    background: "#00ff88",
    color: "#000",
    padding: "20px",
    border: "none",
    borderRadius: "15px",
    width: "250px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "20px"
  };

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ color: "#00ff88" }}>
        🎯 ¿Cuál es tu objetivo?
      </h1>

      <p style={{ marginBottom: "40px" }}>
        Calcularemos tus calorías y entrenamiento ideal.
      </p>

      <button
        style={estiloBoton}
        onClick={() => seleccionar("Perder grasa")}
      >
        🔥 Perder grasa
      </button>

      <button
        style={estiloBoton}
        onClick={() => seleccionar("Ganar músculo")}
      >
        💪 Ganar músculo
      </button>

      <button
        style={estiloBoton}
        onClick={() => seleccionar("Mantener peso")}
      >
        ⚖️ Mantener peso
      </button>
    </div>
  );
}

export default Objetivo;