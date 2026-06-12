import { useState, useEffect } from "react";
import Rutinas from "./pages/Rutinas";
import Nutricion from "./pages/Nutricion";
import Metas from "./pages/Metas";
import Rendimiento from "./pages/Rendimiento";
import Objetivo from "./pages/Objetivo";
import DatosFisicos from "./pages/DatosFisicos";
function App() {
 const [habitos, setHabitos] = useState(Array(5).fill(false));
  const [entrar, setEntrar] = useState(false);
  const [pantalla, setPantalla] = useState("dashboard");
const [objetivo, setObjetivo] = useState("");
const [mostrarObjetivo, setMostrarObjetivo] = useState(false);
const [mostrarDatos, setMostrarDatos] = useState(false);

const [edad, setEdad] = useState("");
const [altura, setAltura] = useState("");
const [sexo, setSexo] = useState("");
  const [peso, setPeso] = useState("");
  const [calorias, setCalorias] = useState("");
  const [meta, setMeta] = useState("");

  

  

  // PANTALLA DE RUTINAS
if (pantalla === "rutinas") {
  return (
  <Rutinas
    volver={() => setPantalla("dashboard")}
    objetivo={objetivo}
  />
);
}


// PANTALLA DE NUTRICIÓN
if (pantalla === "nutricion") {
  return (
    <Nutricion
  volver={() => setPantalla("dashboard")}
  calorias={calorias}
  objetivo={objetivo}
  peso={peso}
/>
  );
}
//PANTALLA DE METAS
if (pantalla === "metas") {
  return (
    <Metas
      volver={() => setPantalla("dashboard")}
      peso={peso}
      meta={meta}
      calorias={calorias}
    />
  );
}
if (pantalla === "rendimiento") {
  return (
    <Rendimiento
      volver={() => setPantalla("dashboard")}
      habitos={habitos}
      setHabitos={setHabitos}
    />
  );
}
  // PANTALLA INICIO
  if (!entrar) {
    return (
      <div style={styles.home}>
        <div style={styles.overlay}>
          <h1 style={styles.logo}>🏋️ FIT TRACK PRO</h1>

          <h1 style={styles.title}>Transforma tu cuerpo</h1>

          <p style={styles.description}>
            Controla tu progreso, rutinas y nutrición en un solo lugar.
          </p>

          <button
            style={styles.startButton}
            onClick={() => {
  setEntrar(true);
  setMostrarObjetivo(true);
}}
          >
            🚀 ENTRAR
          </button>
        </div>
      </div>
    );
  }
if (mostrarObjetivo) {
  return (
    <Objetivo
      seleccionar={(valor) => {
        setObjetivo(valor);

        setMostrarObjetivo(false);
        setMostrarDatos(true);
      }}
    />
  );
}
if (mostrarDatos) {
  return (
    <DatosFisicos
      guardar={(datos) => {
        const pesoActual = Number(datos.peso);
        const alturaActual = Number(datos.altura);
        const edadActual = Number(datos.edad);

        setPeso(datos.peso);
        setAltura(datos.altura);
        setEdad(datos.edad);
        setSexo(datos.sexo);

        // Fórmula Mifflin-St Jeor
        let tmb = 0;

        if (datos.sexo === "hombre") {
          tmb =
            10 * pesoActual +
            6.25 * alturaActual -
            5 * edadActual +
            5;
        } else {
          tmb =
            10 * pesoActual +
            6.25 * alturaActual -
            5 * edadActual -
            161;
        }

        let caloriasFinales =
  tmb * Number(datos.actividad);
        let pesoMeta = pesoActual;

        if (objetivo === "Perder grasa") {
          caloriasFinales -= 500;
          pesoMeta = pesoActual - 10;
        }

        if (objetivo === "Ganar músculo") {
          caloriasFinales += 300;
          pesoMeta = pesoActual + 5;
        }

        if (objetivo === "Mantener peso") {
          pesoMeta = pesoActual;
        }

        setCalorias(Math.round(caloriasFinales));
        setMeta(Math.round(pesoMeta));

        setMostrarDatos(false);
      }}
    />
  );
}
  // DASHBOARD
  return (
    <div style={styles.dashboard}>
      <div
  style={{
    background: "#1e293b",
    padding: "15px",
    borderRadius: "15px",
    marginBottom: "25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #00ff88"
  }}
>
  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
  <button
    onClick={() => setMostrarObjetivo(true)}
    style={{
      background: "#00ff88",
      border: "none",
      padding: "8px 15px",
      borderRadius: "10px",
      fontWeight: "bold",
      cursor: "pointer"
    }}
  >
    ⬅ Objetivo
  </button>

  <h3>⚡ FIT TRACK PRO</h3>
</div>

  <div
  style={{
    color: "#00ff88",
    fontWeight: "bold"
  }}
>
  💪 {objetivo || "Sin objetivo"}
</div>
</div>
      <h1 style={styles.logo}>🏋️ FIT TRACK PRO</h1>

      <div
  style={{
    textAlign: "center",
    marginBottom: "30px"
  }}
>
  <h2 style={styles.welcome}>
    Bienvenido a FIT TRACK PRO 💪
  </h2>

  <p
  style={{
    color: "#94a3b8",
    textAlign: "center",
    fontSize: "18px"
  }}
>
  Monitorea tu progreso y alcanza tus objetivos.
</p>
</div>

      <div style={styles.statsContainer}>
        <div style={styles.statCard}>
          <h2>{peso || "--"} kg</h2>
          <p>Peso</p>
        </div>

        <div style={styles.statCard}>
          <h2>{calorias || "--"}</h2>
          <p>Calorías</p>
        </div>

        <div style={styles.statCard}>
          <h2>{meta || "--"}</h2>
          <p>Meta</p>
        </div>
      </div>

<div
  style={{
    background: "#1e293b",
    padding: "20px",
    borderRadius: "15px",
    marginTop: "30px",
    textAlign: "center",
    border: "1px solid #00ff88",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto"
  }}
>
  <h2>📊 Resumen General</h2>

  <p>⚖️ Peso actual: {peso || "--"} kg</p>

  <p>🎯 Meta: {meta || "--"} kg</p>

  <p>🏆 Objetivo: {objetivo || "--"}</p>

  <p>🔥 Calorías diarias: {calorias || "--"}</p>

  <p>💪 Estado: En progreso</p>
</div>



      <div style={styles.grid}>
        <div
          style={styles.card}
          onClick={() => setPantalla("rutinas")}
        >
          🏋️ Rutinas
        </div>

        
        <div
  style={styles.card}
  onClick={() => setPantalla("nutricion")}
>
  🍎 Nutrición
</div>
        <div
  style={styles.card}
  onClick={() => setPantalla("metas")}
>
  🎯 Metas
</div>
        
        <div
  style={styles.card}
  onClick={() => setPantalla("rendimiento")}
>
  ⚡ Rendimiento
</div>
      </div>
    </div>
  );
}

const styles = {
  home: {
  height: "100vh",
  background: "linear-gradient(135deg, #0f172a, #020617)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Arial",
  color: "white"
},

  overlay: {
    textAlign: "center",
    padding: "40px",
    maxWidth: "600px"
  },

  logo: {
  color: "#00ff88",
  fontSize: "60px",
  marginBottom: "15px",
  textShadow: "0px 0px 20px #00ff88"
},

  title: {
  fontSize: "55px",
  marginBottom: "15px",
  fontWeight: "bold"
},

  description: {
    color: "#b0b0b0",
    fontSize: "18px",
    marginBottom: "30px"
  },

  startButton: {
  background: "#00ff88",
  color: "#000",
  border: "none",
  padding: "20px 60px",
  borderRadius: "15px",
  fontSize: "20px",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0px 0px 20px rgba(0,255,136,0.5)"
},

  dashboard: {
  minHeight: "100vh",
  background: "linear-gradient(180deg,#020617,#0f172a)",
  color: "white",
  padding: "30px",
  fontFamily: "Arial"
},

  welcome: {
    textAlign: "center",
    marginBottom: "20px"
  },

  statsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  },

  statCard: {
  background: "linear-gradient(135deg,#1e293b,#0f172a)",
  padding: "25px",
  borderRadius: "20px",
  minWidth: "180px",
  textAlign: "center",
  border: "1px solid #00ff88",
  boxShadow: "0px 0px 15px rgba(0,255,136,0.3)"
},

  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "350px",
    margin: "40px auto"
  },

  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "none"
  },

  saveButton: {
    background: "#00ff88",
    border: "none",
    padding: "12px",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: "15px",
    marginTop: "40px"
  },

  card: {
  background: "#1e293b",
  padding: "25px",
  borderRadius: "15px",
  textAlign: "center",
  border: "1px solid #00ff88",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "bold",
  transition: "0.3s"
}
};

export default App;