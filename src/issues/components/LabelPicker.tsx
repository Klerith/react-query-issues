import { LoadingIcon } from "../../shared";
import { useLabels } from "../hooks";

interface Props {
  selectedLabels: string[];
  onChange: (labelName: string) => void;
}

export const LabelPicker: React.FC<Props> = ({ selectedLabels, onChange }) => {
  const { data, isLoading } = useLabels();

  if (isLoading) {
    return <LoadingIcon />;
  }

  return (
    <div>
      {data?.map((labelData) => {
        return (
          <span
            key={labelData.id}
            className={`badge rounded-pill m-1 label-picker ${
              selectedLabels.includes(labelData.name) ? "label-active" : ""
            }`}
            onClick={() => onChange(labelData.name)}
            style={{
              border: `1px solid #${labelData.color}`,
              color: `#${labelData.color}`,
            }}
          >
            {labelData.name}
          </span>
        );
      })}
    </div>
  );
};
