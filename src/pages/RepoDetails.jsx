import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RepoDetails = () => {
  const { repoFullName } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/repos/${repoFullName}`
        );
        const data = await response.json();
        setRepoDetails(data);
      } catch (error) {
        console.error("Error fetching repository details:", error);
      }
      setLoading(false);
    };

    fetchRepoDetails();
  }, [repoFullName]);

  if (loading) return <p>Loading...</p>;

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
