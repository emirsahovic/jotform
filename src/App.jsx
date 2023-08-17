import { Route, Routes } from "react-router-dom";
import Jotform from "./components/Jotform";
import Results from "./pages/Results";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Jotform />} />
      <Route path="/results/:id" element={<Results />} />
    </Routes>
  );
}

export default App;
