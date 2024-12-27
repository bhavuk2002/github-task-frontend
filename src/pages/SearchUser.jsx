import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchUser = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (username.trim()) {
      navigate(`/user/${username}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSearch}
        className="flex items-center p-4  rounded-md w-full max-w-lg"
      >
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg w-20 hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchUser;
