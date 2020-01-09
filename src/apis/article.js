
import axios from '../utils/myaxios.js'

export const getCategory = ()=>{
    //需要return出去 这样那边才能拿到一个promise
    return axios({
        url:'/category',
        
    })
}