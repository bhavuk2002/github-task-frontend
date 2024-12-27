import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchUser from "./pages/SearchUser";
import UserDetails from "./pages/UserDetails";
import RepoDetails from "./pages/RepoDetails";
import Followers from "./pages/Followers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchUser />} />
        <Route path="/user/:username" element={<UserDetails />} />
        <Route path="/repo/:repoFullName" element={<RepoDetails />} />
        <Route path="/followers/:username" element={<Followers />} />
      </Routes>
    </Router>
  );
}

export default App;
