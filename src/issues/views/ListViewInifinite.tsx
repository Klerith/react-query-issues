import { useState } from "react";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import { useIssuesInfinite } from "../hooks";
import { LoadingIcon } from "../../shared";
import { State } from "../interface";

export const ListViewInfinite = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState<State>();

  const {
    issuesQuery: { isLoading, data, fetchNextPage, hasNextPage },
  } = useIssuesInfinite({
    state: selectedState,
    labels: selectedLabels,
  });

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
        {isLoading ? (
          <LoadingIcon />
        ) : (
          <IssueList
            issues={data?.pages?.flat() || []}
            state={selectedState}
            onStateChanged={(newState) => setSelectedState(newState)}
          />
        )}
        <button
          onClick={() => void fetchNextPage()}
          disabled={!hasNextPage}
          className="mt-2 btn btn-outline-primary"
        >
          Load more...
        </button>
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
