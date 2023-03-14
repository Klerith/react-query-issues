import axios from "axios";

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
})

