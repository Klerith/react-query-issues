import { Issue } from "../interface";
import { githubApi } from "../../api/githubApi";
import { useQuery } from "@tanstack/react-query";
import { sleep } from "../../helpers/sleep";

export const getIssue = async function (issueNumber: number): Promise<Issue> {
  await sleep(2);
  const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`);

  return data;
};

export const getIssueComments = async function (
  issueNumber: number
): Promise<Issue[]> {
  await sleep(2);
  const { data } = await githubApi.get<Issue[]>(
    `/issues/${issueNumber}/comments`
  );

  return data;
};

export const useIssue = (issueNumber: number) => {
  const queryIssueDetail = useQuery(["issue", issueNumber], () =>
    getIssue(issueNumber)
  );

  const queryComments = useQuery(
    ["issue", "comments", issueNumber],
    () => getIssueComments(queryIssueDetail.data!.number),
    {
      enabled: !!queryIssueDetail.data,
    }
  );

  return {
    queryIssueDetail,
    queryComments,
  };
};
