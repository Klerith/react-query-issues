import axios from 'axios';


export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
});

