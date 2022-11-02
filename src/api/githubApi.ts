import axios from 'axios';


export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
});

