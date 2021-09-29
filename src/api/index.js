import axios from "axios";

/* api文档 https://cnodejs.org/api */
const BASE_URL = 'https://cnodejs.org/api/v1'

function request(url, params){
    const fullUrl = BASE_URL + url
    return axios.get(fullUrl, params)
}
/* 获取帖子列表 */

/* 
接收 get 参数
page Number 页数
tab String 主题分类。目前有 ask share job good
limit Number 每一页的主题数量 
*/
export function getPostList(page, tab){
    return request('/topics', {
        params:{
            page,
            tab,
            limit: 40,
        }
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