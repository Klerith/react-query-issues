import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { Issue, State } from "../interface";
import { sleep } from "../../helpers/sleep";
import { useEffect, useState } from "react";

interface Props {
  state?: State;
  labels: string[];
  page?: number;
}

const getIssues = async ({
  labels,
  state,
  page = 1,
}: Props): Promise<Issue[]> => {
  await sleep(2);

  const params = new URLSearchParams();

  if (state) params.append("state", state);
  if (labels.length > 0) {
    const labelsParams = labels.join(",");
    params.append("labels", labelsParams);
  }

  params.append("page", page.toString());
  params.append("per_page", "5");

  const { data } = await githubApi.get<Issue[]>("/issues", { params });

  return data;
};

export const useIssues = ({ labels, state }: Props) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [state, labels]);

  const issuesQuery = useQuery(["issues", { page, state, labels }], () =>
    getIssues({ labels, state, page })
  );

  const nextPage = () => {
    if (issuesQuery.data?.length === 0) return;
    setPage(page + 1);
  };

  const previousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return {
    issuesQuery,
    page: issuesQuery?.isFetching ? "Loading" : page,
    nextPage,
    previousPage,
  };
};
