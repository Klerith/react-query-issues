import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { Label } from "../interface/label-response";
import { sleep } from "../../helpers/sleep";

const getLabelsFromGithub = async (): Promise<Label[]> => {
  const { data } = await githubApi.get<Label[]>("/labels");

  await sleep(2);
  return data;
};
export const useLabels = () => {
  const labelsQuery = useQuery(["labelsCache"], getLabelsFromGithub, {
    staleTime: 1000 * 60 * 60,
    placeholderData: [
      {
        id: 791921801,
        node_id: "MDU6TGFiZWw3OTE5MjE4MDE=",
        url: "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        name: "❤️",
        color: "ffffff",
        default: false,
        description: null,
      },
      {
        id: 69105383,
        node_id: "MDU6TGFiZWw2OTEwNTM4Mw==",
        url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
        name: "Browser: IE",
        color: "c7def8",
        default: false,
        description: null,
      },
      {
        id: 69105358,
        node_id: "MDU6TGFiZWw2OTEwNTM1OA==",
        url: "https://api.github.com/repos/facebook/react/labels/Browser:%20Safari",
        name: "Browser: Safari",
        color: "c7def8",
        default: false,
        description: null,
      },
    ],
  });

  return labelsQuery;
};
