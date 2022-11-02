import axios from 'axios';


export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
});

