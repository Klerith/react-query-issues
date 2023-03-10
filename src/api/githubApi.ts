import axios from "axios";

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
})

