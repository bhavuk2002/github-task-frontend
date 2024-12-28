import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const RepoDetails = () => {
  const { repoFullName } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);
  const location = useLocation();

  const repoData = location.state?.repo;

  useEffect(() => {
    setRepoDetails(repoData);
  }, [repoData, repoFullName]);

  // if (loading) return <p>Loading...</p>;

  return (
    <div className="m-6 flex">
      <Link
        to={`/`}
        className=" absolute text-gray-300 hover:text-blue-300 font-semibold top-2 right-6"
      >
        Navigate to Home
      </Link>
      {repoDetails && (
        <div className="flex flex-row items-start m-24 p-12 space-y-4">
          {/* Owner and Verification */}
          <div className="flex flex-col items-center space-y-4 p-6 overflow-hidden">
            <img
              src={repoDetails.owner.avatar_url}
              alt={`${repoDetails.owner.login}'s avatar`}
              className="w-36 h-36 rounded-full"
            />
            <div className=" text-wrap m-6 pl-12 pr-12">
              <div className="m-6 flex text-wrap">
                <span className="text-gray-800 font-semibold text-sm">
                  ✅ Verified by GitHub
                </span>
              </div>
              <p className="m-6 text-gray-500 text-sm text-wrap">
                GitHub confirms that this app meets the requirements for
                verification.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4 pr-8">
            {/* Repository Info */}
            <div className="flex flex-col space-y-2">
              <h1 className="text-gray-500 text-base">Application</h1>
              <a
                href={repoDetails.homepage}
                target="_blank"
                className="text-4xl font-bold hover:text-blue-500"
              >
                {repoDetails.name}
              </a>
              {/* <br /> */}
              <div>
                <a
                  href={repoDetails.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-green-500 text-white py-2 px-4 rounded"
                >
                  Visit Repository
                </a>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <p className="text-gray-700">{repoDetails.description}</p>
              <p>
                This repository is maintained by{" "}
                <a
                  href={repoDetails.owner.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold"
                >
                  {repoDetails.owner.login}
                </a>
                .
              </p>
            </div>

            {/* Statistics */}
            <div className="flex space-x-6">
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold">
                  {repoDetails.stargazers_count}
                </span>
                <span className="text-sm text-gray-500">Stars</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold">
                  {repoDetails.forks_count}
                </span>
                <span className="text-sm text-gray-500">Forks</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold">
                  {repoDetails.open_issues_count}
                </span>
                <span className="text-sm text-gray-500">Open Issues</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold">
                  {repoDetails.language || "N/A"}
                </span>
                <span className="text-sm text-gray-500">Language</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RepoDetails;
