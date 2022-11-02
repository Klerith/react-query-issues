import axios from 'axios';


export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
});

