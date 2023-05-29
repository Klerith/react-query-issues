import { FiCheckCircle, FiInfo, FiMessageSquare } from "react-icons/fi";
import { Issue, State } from "../interface";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { getIssue, getIssueComments } from "../hooks";

type Props = {
  issue: Issue;
};

export const IssueItem: React.FC<Props> = ({ issue }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const prefetchData = async () => {
    await queryClient.prefetchQuery(["issue", issue.number], () =>
      getIssue(issue.number)
    );

    await queryClient.prefetchQuery(["issue", "comments", issue.number], () =>
      getIssueComments(issue.number)
    );
  };

  const presetData = async () => {
    queryClient.setQueryData(["issue", issue.number], issue, {
      updatedAt: new Date().getTime() + 10000,
    });
  };

  return (
    <div
      className="card mb-2 issue"
      onClick={() => navigate(`/issues/issue/${issue.number}`)}
      // onMouseEnter={prefetchData}
      onMouseEnter={presetData}
    >
      <div className="card-body d-flex align-items-center">
        {issue.state === State.Open ? (
          <FiInfo size={30} color="red" />
        ) : (
          <FiCheckCircle size={30} color="green" />
        )}

        <div className="d-flex flex-column flex-fill px-2">
          <span>{issue.title}</span>
          <span className="issue-subinfo">
            #{issue.number} opened 2 days ago by{" "}
            <span className="fw-bold">{issue.user?.login}</span>
          </span>
        </div>

        <div className="d-flex align-items-center">
          <img
            src={issue.user?.avatar_url}
            alt="User Avatar"
            className="avatar"
          />
          <span className="px-2">{issue.comments}</span>
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};
