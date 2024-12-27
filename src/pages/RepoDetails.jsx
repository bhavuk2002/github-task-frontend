import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const RepoDetails = () => {
  const { repoFullName } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);
  const location = useLocation();

  const repoData = location.state?.repo;

  useEffect(() => {
    setRepoDetails(repoData);
  }, [repoFullName]);

  // if (loading) return <p>Loading...</p>;

  return (
    <div>
      {repoDetails && (
        <div>
          <h2>{repoDetails.name}</h2>
          <p>{repoDetails.description}</p>
          <a
            href={repoDetails.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default RepoDetails;
