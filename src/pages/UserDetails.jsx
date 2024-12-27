import axios from "axios";
import { useState, useEffect } from "react";

const UserDetails = ({ username }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const userResponse = await axios.get(
          `https://api.github.com/users/${username}`
        );

        console.log(userResponse);

        const userData = userResponse.data;

        const reposResponse = await axios.get(userData.repos_url);

        console.log(reposResponse);

        const reposData = reposResponse.data;

        setUserInfo(userData);
        setRepos(reposData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
      setLoading(false);
    };

    fetchUserData();
  }, [username]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {userInfo && (
        <div>
          <img src={userInfo.avatar_url} alt={userInfo.login} width="100" />
          <h2>{userInfo.name || userInfo.login}</h2>
          <p>{userInfo.bio}</p>
          <p>{userInfo.location}</p>
        </div>
      )}
      <h3>Repositories</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={`/repo/${repo.full_name}`}>{repo.name}</a>
          </li>
        ))}
      </ul>
      <a href={`/followers/${username}`}>View Followers</a>
    </div>
  );
};

export default UserDetails;
