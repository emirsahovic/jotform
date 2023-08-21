import { Route, Routes } from "react-router-dom";
import Jotform from "./components/Jotform";
import Results from "./pages/Results";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questionary" element={<Jotform />} />
      <Route path="/results/:id" element={<Results />} />
    </Routes>
  );
}

export default App;
