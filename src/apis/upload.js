import axios from '../utils/myaxios.js'

export const upload = (data)=>{
    //需要return出去 这样那边才能拿到一个promise
    return axios({
        method: 'post',
        url:'/upload',
        data
    })
}
