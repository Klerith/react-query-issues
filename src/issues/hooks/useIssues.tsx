import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { Issue } from '../interfaces';

const getIssues = async():Promise<Issue[]> => {

    const { data } = await githubApi.get<Issue[]>('/issues');
    console.log(data);
    return data;

}


export const useIssues = () => {
  
    const issuesQuery = useQuery(
        ['issues'],
        getIssues,
    );



    return {
        issuesQuery,
    }
}
