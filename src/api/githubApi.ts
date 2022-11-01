import axios from 'axios';


export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        'Authorization': 'token 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'
    }
});

