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
        const userResponse = await axios.post(
          `http://localhost:3000/api/users`,
          {
            username: username,
          }
        );
        const userData = userResponse.data;
        setUserInfo(userData);

        const reposResponse = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );

        const reposData = reposResponse.data;

        setRepos(reposData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
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
            <br />
            <Link
              to={`/`}
              className="text-gray-300 hover:text-blue-300 font-semibold"
            >
              Navigate to Home
            </Link>
          </div>
        </div>
      )}
      {repos.length !== 0 && (
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
      )}
      {userInfo == null && loading === false && (
        <div className=" m-4 text-gray-600 font-semibold">
          No User Found. Please enter a valid username.
          <br />
          <Link
            to={`/`}
            className="text-gray-300 hover:text-blue-300 font-semibold"
          >
            Navigate to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
