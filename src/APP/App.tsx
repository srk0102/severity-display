import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importing Global Components
import { Main } from "../components/main/main";
import { Pie } from "../components/pieChart/pie";
import Sev from "../components/sev/sev"

function App() {
  const data = [
    { label: "Apples", value: 10 },
    { label: "Oranges", value: 20 },
    { label: "Grapes", value: 40 },
    { label: "Kiwi", value: 89 },
  ];
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/test"
            element={<Pie data={data} outerRadius="300" innerRadius="0" />}
          />
          <Route path="/sev/:name" element={<Sev/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
