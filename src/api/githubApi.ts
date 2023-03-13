import axios from "axios";

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
})

