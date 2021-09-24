import axios from "axios";

const BASE_URL = 'https://cnodejs.org/api/v1'

function request(url, params){
    return axios.get(BASE_URL + url, params)
}
/* 获取帖子列表 */
export function getPostList(tab){
    return request('/topics', {
        page: 1,
        limit: 25,
        tab: tab,
    })
}
/* 获取帖子数据（正文、评论等） */
export function getArticleDate(id){
    return request(`/topic/${id}`)
}
/* 获取用户详细页信息 */
export function getUserInfo(loginname){
    return request(`/user/${loginname}`)
}