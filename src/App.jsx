import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchUser from "./pages/SearchUser";
import UserDetails from "./pages/UserDetails";

function App() {
  const [username, setUsername] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <SearchUser onSearch={(username) => setUsername(username)} />
          }
        />
        <Route
          path="/user/:username"
          element={<UserDetails username={username} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
