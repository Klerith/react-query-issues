import { Issue } from "../interface";
import { IssueItem } from "./IssueItem";

type Props = {
  issues: Issue[];
};

export const IssueList: React.FC<Props> = ({ issues }) => {
  return (
    <div className="card border-white">
      <div className="card-header bg-dark">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <a className="nav-link active">All</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Open</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Closed</a>
          </li>
        </ul>
      </div>
      <div className="card-body text-dark">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
};
