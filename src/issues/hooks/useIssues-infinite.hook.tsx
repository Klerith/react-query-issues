import { useInfiniteQuery } from "@tanstack/react-query";
import { Issue, State } from "../interface";
import { sleep } from "../../helpers/sleep";
import { githubApi } from "../../api/githubApi";

interface Props {
  state?: State;
  labels: string[];
  page?: number;
}

interface QueryProps {
  pageParam?: number;
  queryKey: (string | Props)[];
}

const getIssues = async ({
  pageParam = 1,
  queryKey,
}: QueryProps): Promise<Issue[]> => {
  const [, , combination] = queryKey;

  const { state, labels } = combination as Props;

  await sleep(2);

  const params = new URLSearchParams();

  if (state) params.append("state", state);
  if (labels.length > 0) {
    const labelsParams = labels.join(",");
    params.append("labels", labelsParams);
  }

  params.append("page", pageParam.toString());
  params.append("per_page", "5");

  const { data } = await githubApi.get<Issue[]>("/issues", { params });

  return data;
};

export const useIssuesInfinite = ({ labels, state }: Props) => {
  const issuesQuery = useInfiniteQuery(
    ["issues", "infinite", { page: 1, state, labels }],
    getIssues,
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length === 0) return;
        return pages.length + 1;
      },
    }
  );

  return {
    issuesQuery,
  };
};
