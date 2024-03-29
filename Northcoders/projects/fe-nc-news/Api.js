import axios from 'axios'

const marketPlaceAPI = axios.create({
    baseURL: 'https://nc-news-4rxh.onrender.com/api'
})

export function fetchAllArticles() {
    return marketPlaceAPI.get("/articles")
    .then((response) => {
        return response.data
    })
}

export function fetchArticleId(article_id) {
    return marketPlaceAPI.get(`/articles/${article_id}`).then(res => {
        return res.data
    })
}

export function fetchArticleCommentsById(article_id) {
    return marketPlaceAPI.get(`/articles/${article_id}/comments`).then(res => {
        return res.data
    })
}

// export function fetchTopics(topic_name) {
//     return marketPlaceAPI.get("/topics", {params: {topic_name}})
// }