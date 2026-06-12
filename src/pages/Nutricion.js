import { useMemo } from "react";

function Nutricion({ volver, calorias, objetivo, peso }) {
  const pesoNum = Number(peso) || 70;
  const caloriasNum = Number(calorias) || 2500;

  
  const macros = useMemo(() => {
    let proteina =
      objetivo === "Perder grasa"
        ? pesoNum * 2.2
        : objetivo === "Ganar músculo"
        ? pesoNum * 2
        : pesoNum * 1.8;

    let grasas = Math.min(Math.max(pesoNum * 0.8, 50), 80);

    const kcalP = proteina * 4;
    const kcalG = grasas * 9;

    let carbs = (caloriasNum - kcalP - kcalG) / 4;

    return {
      proteina: Math.round(proteina),
      grasas: Math.round(grasas),
      carbs: Math.round(carbs)
    };
  }, [caloriasNum, objetivo, pesoNum]);

  // =========================
  // LIMITES REALISTAS (CLAVE)
  // =========================
  const LIMITES = {
    arroz: 180,
    pasta: 180,
    avena: 90,
    tortilla: 120,
    pollo: 220,
    atun: 160,
    res: 200
  };

  function ajustar(valor, max) {
    return Math.min(Math.round(valor), max);
  }

  // =========================
  // BASE DE ALIMENTOS
  // =========================
  const alimentos = {
    proteinas: [
      { nombre: "pollo", kcal: 31, limite: LIMITES.pollo },
      { nombre: "atún", kcal: 25, limite: LIMITES.atun },
      { nombre: "res magra", kcal: 26, limite: LIMITES.res },
      { nombre: "huevo", kcal: 13, limite: 200 }
    ],
    carbs: [
      { nombre: "arroz", kcal: 28, limite: LIMITES.arroz },
      { nombre: "pasta", kcal: 30, limite: LIMITES.pasta },
      { nombre: "avena", kcal: 17, limite: LIMITES.avena },
      { nombre: "tortilla", kcal: 22, limite: LIMITES.tortilla }
    ],
    grasas: ["aguacate", "aceite de oliva", "nueces"]
  };

  
  function generarPlanes() {
    const planes = [];

    for (let i = 0; i < 4; i++) {
      const p = alimentos.proteinas[i % alimentos.proteinas.length];
      const c = alimentos.carbs[i % alimentos.carbs.length];
      const g = alimentos.grasas[i % alimentos.grasas.length];

      // 🔥 PROTEINA REALISTA
      const proteinaGramos = ajustar(
        (macros.proteina * 0.6 / p.kcal) * 100,
        p.limite
      );

      // 🔥 CARBS REALISTA (LIMITADO)
      const carbsGramos = ajustar(
        (macros.carbs * 0.5 / c.kcal) * 100,
        c.limite
      );

      // 🔥 REPARTO DE CARBS (EVITA MONSTRUOS 700g)
      const carbsExtra = ajustar(
        (macros.carbs * 0.3 / 22) * 100,
        120
      );

      planes.push({
        nombre: `Plan ${i + 1}`,

        desayuno: `Avena + 3 huevos + fruta`,

        comida: `${proteinaGramos}g ${p.nombre} + ${carbsGramos}g ${c.nombre} + ${carbsExtra}g tortilla + 10g ${g}`,

        cena: `${ajustar((macros.proteina * 0.4 / p.kcal) * 100, p.limite)}g ${p.nombre} + verduras`,

        snack: `Yogur griego + fruta + 15g nueces`
      });
    }

    return planes;
  }

  const planes = generarPlanes();

  // =========================
  // UI
  // =========================
  const cardStyle = {
    background: "#1e293b",
    padding: "18px",
    borderRadius: "15px",
    marginBottom: "15px",
    border: "1px solid #00ff88"
  };

  return (
    <div style={{ background: "#0f172a", minHeight: "100vh", color: "white", padding: "25px" }}>
      <button
        onClick={volver}
        style={{
          background: "#00ff88",
          border: "none",
          padding: "10px",
          borderRadius: "10px",
          cursor: "pointer"
        }}
      >
        ⬅ Volver
      </button>

      <h1 style={{ textAlign: "center", color: "#00ff88" }}>
        🍎  NUTRICIÓN REALISTA
      </h1>

      {/* MACROS */}
      <div style={cardStyle}>
        <h2>📊 Tus macros</h2>
        <p>🥩 Proteína: {macros.proteina}g</p>
        <p>🍞 Carbs: {macros.carbs}g</p>
        <p>🥑 Grasas: {macros.grasas}g</p>
        <p>🔥 Calorías: {caloriasNum}</p>
      </div>

      {/* PLANES */}
      <h2 style={{ textAlign: "center" }}>🍽️ Planes disponibles</h2>

      {planes.map((plan, index) => (
        <div key={index} style={cardStyle}>
          <h3>🍱 {plan.nombre}</h3>

          <p>🍳 Desayuno: {plan.desayuno}</p>
          <p>🍗 Comida: {plan.comida}</p>
          <p>🌙 Cena: {plan.cena}</p>
          <p>🥜 Snack: {plan.snack}</p>

          <button
            style={{
              marginTop: "10px",
              background: "#00ff88",
              border: "none",
              padding: "10px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
            onClick={() => alert(`Seleccionaste ${plan.nombre}`)}
          >
            Seleccionar plan
          </button>
        </div>
      ))}
    </div>
  );
}

export default Nutricion;