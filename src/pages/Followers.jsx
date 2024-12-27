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
        const response = await fetch(
          `https://api.github.com/users/${username}/followers`
        );
        const data = await response.json();
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
    <div>
      <h3>Followers</h3>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>
            <a href={`/user/${follower.login}`}>{follower.login}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Followers;
