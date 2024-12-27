import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Followers = () => {
  const { username } = useParams();
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFollowers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/followers`
        );
        const data = response.data;
        setFollowers(data);
      } catch (error) {
        console.error("Error fetching followers:", error);
      }
      setLoading(false);
    };

    fetchFollowers();
  }, [username]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col rounded-lg p-4 max-w-md m-12 p-12">
      <h3 className="text-3xl font-semibold text-gray-800 mb-4">Followers</h3>
      <ol className="space-y-2">
        {followers.map((follower, index) => (
          <li
            key={follower.id}
            className="flex  space-x-2 hover:bg-gray-100 rounded-lg p-2 transition duration-200"
          >
            <a
              href={`/user/${follower.login}`}
              className="text-lg font-medium text-gray-700 hover:text-blue-600"
            >
              {index + 1}
              {". "}
              {follower.login}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Followers;
