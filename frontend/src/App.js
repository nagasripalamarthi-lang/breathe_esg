import React, { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("electricity");

  const [electricity, setElectricity] = useState([]);
  const [travel, setTravel] = useState([]);
  const [fuel, setFuel] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [reviewMessage, setReviewMessage] = useState("");

  const fileInputRef = useRef(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/electricity/")
      .then((res) => res.json())
      .then((data) => setElectricity(data))
      .catch((err) => console.error(err));

    fetch("http://127.0.0.1:8000/travel/")
      .then((res) => res.json())
      .then((data) => setTravel(data))
      .catch((err) => console.error(err));

    fetch("http://127.0.0.1:8000/fuel/")
      .then((res) => res.json())
      .then((data) => setFuel(data))
      .catch((err) => console.error(err));
  }, []);

  const getCurrentData = () => {
    if (activeTab === "electricity") return electricity;
    if (activeTab === "travel") return travel;
    if (activeTab === "fuel") return fuel;
    return [];
  };

  const currentData = getCurrentData();

  const filteredData = currentData.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleReview = () => {
    const total = currentData.length;
    setReviewMessage(
      `Review completed. Total records in ${activeTab}: ${total}`
    );
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      alert(`Selected file: ${file.name}`);
    }
  };

  return (
    <div style={styles.container}>
      <h1>🌍 ESG Dashboard</h1>

      <input
        type="text"
        placeholder="Search all ESG data"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.search}
      />

      <div style={styles.buttonRow}>
        <button style={styles.button} onClick={handleReview}>
          Review
        </button>

        <button style={styles.button} onClick={handleUploadClick}>
          Upload
        </button>

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>

      <p>{reviewMessage}</p>

      <div style={styles.tabs}>
        <button
          style={styles.tabButton}
          onClick={() => setActiveTab("electricity")}
        >
          ⚡ Electricity
        </button>

        <button
          style={styles.tabButton}
          onClick={() => setActiveTab("travel")}
        >
          ✈ Travel
        </button>

        <button
          style={styles.tabButton}
          onClick={() => setActiveTab("fuel")}
        >
          ⛽ Fuel
        </button>
      </div>

      <div style={styles.tableContainer}>
        {filteredData.length > 0 ? (
          <table style={styles.table}>
            <thead>
              <tr>
                {Object.keys(filteredData[0]).map((key) => (
                  <th key={key} style={styles.th}>
                    {key}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, i) => (
                    <td key={i} style={styles.td}>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3>No data available</h3>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
    background: "#f4f6f9",
    minHeight: "100vh",
  },

  search: {
    padding: "10px",
    width: "300px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },

  buttonRow: {
    marginBottom: "20px",
  },

  button: {
    padding: "10px 20px",
    marginRight: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
  },

  tabs: {
    marginBottom: "20px",
  },

  tabButton: {
    padding: "10px 20px",
    marginRight: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#2196F3",
    color: "white",
    cursor: "pointer",
  },

  tableContainer: {
    overflowX: "auto",
    background: "white",
    padding: "10px",
    borderRadius: "10px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    border: "1px solid #ddd",
    padding: "10px",
    backgroundColor: "#f2f2f2",
  },

  td: {
    border: "1px solid #ddd",
    padding: "10px",
  },
};

export default App;