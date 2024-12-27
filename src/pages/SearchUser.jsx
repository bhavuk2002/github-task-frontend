import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchUser = ({ onSearch }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
    }
    navigate(`/user/${username}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchUser;
