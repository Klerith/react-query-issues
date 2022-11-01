import axios from 'axios';


export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        authorization: 'token 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',
    }
});

