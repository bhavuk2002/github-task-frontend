import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../component/Card";

const UserDetails = () => {
  const { username } = useParams();
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
    <div className="flex ">
      {userInfo && (
        <div className="flex flex-col  m-4 space-y-2">
          <img
            src={userInfo.avatar_url}
            alt={userInfo.login}
            width="100"
            className="rounded"
          />
          <h2 className="font-medium text-xl">
            {userInfo.name || userInfo.login}
          </h2>
          <p className="text-gray-500">{userInfo.bio}</p>
          <p className="text-gray-400">
            📍{userInfo.location || "Planet Earth"}
          </p>
          <div className="mt-6">
            <Link
              to={`/followers/${username}`}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              View Followers
            </Link>
          </div>
        </div>
      )}
      <div className="flex flex-col m-4">
        <h3 className="text-2xl font-bold mb-4">Repositories</h3>
        <div className="grid grid-cols-4 space-x-4 space-y-2">
          {repos.map((repo) => (
            <Card
              key={repo.id}
              name={repo.name}
              description={repo.description}
              avatarUrl={repo.owner.avatar_url}
              link={`/repo/${encodeURIComponent(repo.full_name)}`}
              repoData={repo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
