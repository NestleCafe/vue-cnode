import axios from "axios";

const BASE_URL = 'https://cnodejs.org/api/v1'

function request(url, params){
    return axios.get(BASE_URL + url, params)
}

export function getPostList(tab){
    return request('/topics', {
        page: 1,
        limit: 25,
        tab: tab,
    })
}

export function getArticleDate(id){
    return request(`/topic/${id}`)
}