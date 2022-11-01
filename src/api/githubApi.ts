import axios from 'axios';


export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
});

