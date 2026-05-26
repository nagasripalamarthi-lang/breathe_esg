import { useEffect, useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("electricity");

  const [electricity, setElectricity] = useState([]);
  const [travel, setTravel] = useState([]);
  const [fuel, setFuel] = useState([]);

  useEffect(() => {
    fetch("https://breathe-esg-1-n3wz.onrender.com/electricity/")
      .then(res => res.json())
      .then(data => {console.log(data);setElectricity(data)});

    fetch("https://breathe-esg-1-n3wz.onrender.com/travel/")
      .then(res => res.json())
      .then(data => {console.log(data);setTravel(data)});

    fetch("https://breathe-esg-1-n3wz.onrender.com/fuel/")
      .then(res => res.json())
      .then(data => {console.log(data);setFuel(data)});
  }, []);

  const renderTable = (data) => {
    if (!data || data.length === 0) return <p>No data found</p>;

    const headers = Object.keys(data[0]);

    return (
      <div style={{ overflowX: "auto" }}>
        <table style={styles.table}>
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h} style={styles.th}>{h}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {headers.map((h) => (
                  <td key={h + i} style={styles.td}>
                    {row[h] !== null ? String(row[h]) : "N/A"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌍 ESG Dashboard</h1>

      {/* Tabs */}
      <div style={styles.tabs}>
        <button
          style={activeTab === "electricity" ? styles.activeBtn : styles.btn}
          onClick={() => setActiveTab("electricity")}
        >
          ⚡ Electricity
        </button>

        <button
          style={activeTab === "travel" ? styles.activeBtn : styles.btn}
          onClick={() => setActiveTab("travel")}
        >
          🚗 Travel
        </button>

        <button
          style={activeTab === "fuel" ? styles.activeBtn : styles.btn}
          onClick={() => setActiveTab("fuel")}
        >
          ⛽ Fuel
        </button>
      </div>

      {/* Tables */}
      <div style={styles.card}>
        {activeTab === "electricity" && renderTable(electricity)}
        {activeTab === "travel" && renderTable(travel)}
        {activeTab === "fuel" && renderTable(fuel)}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    padding: "20px",
    background: "#f5f7fb",
    minHeight: "100vh"
  },
  title: {
    marginBottom: "20px"
  },
  tabs: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  btn: {
    padding: "10px 15px",
    border: "1px solid #ccc",
    background: "#fff",
    cursor: "pointer",
    borderRadius: "6px"
  },
  activeBtn: {
    padding: "10px 15px",
    border: "1px solid #007bff",
    background: "#007bff",
    color: "white",
    cursor: "pointer",
    borderRadius: "6px"
  },
  card: {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse"
  },
  th: {
    border: "1px solid #ddd",
    padding: "10px",
    background: "#f0f0f0",
    textAlign: "left"
  },
  td: {
    border: "1px solid #ddd",
    padding: "8px"
  }
};

export default App;