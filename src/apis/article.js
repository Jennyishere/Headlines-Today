
import axios from '../utils/myaxios.js'

export const getCategory = ()=>{
    //需要return出去 这样那边才能拿到一个promise
    return axios({
        url:'/category',
        
    })
}
// 获取所有的文章
export const getAllArticle = (params)=>{
    //需要return出去 这样那边才能拿到一个promise
    return axios({
        url:'/post',
        params
    })
}
// 获取文章详情
export const getArticleDetail = (id)=>{
    //需要return出去 这样那边才能拿到一个promise
    return axios({
        url:`/post/${id}`
    })
}