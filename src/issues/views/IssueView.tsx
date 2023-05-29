import { Link, Navigate, useParams } from "react-router-dom";
import { IssueComment } from "../components/IssueComment";
import { useIssue } from "../hooks";
import { LoadingIcon } from "../../shared";

export const IssueView = () => {
  const { id = 0 } = useParams();

  const {
    queryIssueDetail: { data, isLoading: isLoadingIssue, error },
    queryComments: { data: comments, isLoading: isLoadingComments },
  } = useIssue(Number(id));

  if (isLoadingIssue) {
    return <LoadingIcon />;
  }

  if (error) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <Link to="./issues/list">Go Back</Link>
      </div>

      {/* Primer comentario */}
      <IssueComment issue={data!} />

      {isLoadingComments ? (
        <LoadingIcon />
      ) : (
        comments?.map((issue) => <IssueComment key={issue.id} issue={issue} />)
      )}
    </div>
  );
};
