import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Github from "./pages/github";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/input" element={<Github />} />
      </Routes>
    </Router>
  );
}

export default App;
