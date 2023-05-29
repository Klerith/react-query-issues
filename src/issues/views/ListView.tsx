import { useState } from "react";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import { useIssues } from "../hooks";
import { LoadingIcon } from "../../shared";

export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const {
    issuesQuery: { isLoading, data, error },
  } = useIssues();

  const onChangeLabel = (labelName: string) => {
    if (selectedLabels.includes(labelName)) {
      setSelectedLabels(selectedLabels.filter((label) => label !== labelName));
    } else {
      setSelectedLabels([...selectedLabels, labelName]);
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-8">
        {isLoading ? <LoadingIcon /> : <IssueList issues={data!} />}
      </div>
      <div className="col-4">
        <LabelPicker
          selectedLabels={selectedLabels}
          onChange={(labelName) => onChangeLabel(labelName)}
        />
      </div>
    </div>
  );
};
