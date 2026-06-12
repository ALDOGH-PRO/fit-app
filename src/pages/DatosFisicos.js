import { useState } from "react";

function DatosFisicos({ objetivo, guardar }) {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [edad, setEdad] = useState("");
  const [sexo, setSexo] = useState("hombre");
  const [actividad, setActividad] = useState("1.2");

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "20px",
          width: "400px",
          border: "1px solid #00ff88"
        }}
      >
        <h1 style={{ color: "#00ff88", textAlign: "center" }}>
          📋 Datos Físicos
        </h1>

        <p style={{ textAlign: "center" }}>
          Objetivo: <b>{objetivo}</b>
        </p>

        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Altura (cm)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          style={inputStyle}
        />

        <select
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
          style={inputStyle}
        >
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>

        <select
          value={actividad}
          onChange={(e) => setActividad(e.target.value)}
          style={inputStyle}
        >
          <option value="1.2">Sedentario</option>
          <option value="1.375">Ligero</option>
          <option value="1.55">Moderado</option>
          <option value="1.725">Intenso</option>
        </select>

       <button
  style={boton}
  onClick={() => {
    if (!peso || !altura || !edad) {
      alert("Completa todos los campos");
      return;
    }

    guardar({
      peso,
      altura,
      edad,
      sexo,
      actividad
    });
  }}
>
  🔥 Calcular Plan
</button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  borderRadius: "10px",
  border: "none"
};

const boton = {
  width: "100%",
  marginTop: "20px",
  padding: "15px",
  background: "#00ff88",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  cursor: "pointer"
};

export default DatosFisicos;