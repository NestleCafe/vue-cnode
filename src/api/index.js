import axios from "axios";

const BASE_URL = 'https://cnodejs.org/api/v1'

function request(url, params){
    return axios.get(BASE_URL + url, params)
}

export function getPostList(){
    return request('/topics', {
        page: 1,
        limit: 25,
    })
}