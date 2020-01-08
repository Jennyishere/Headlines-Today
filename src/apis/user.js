import axios from '../utils/myaxios.js'

export const login = (data)=>{
    //需要return出去 这样那边才能拿到一个promise
    return axios({
        method: 'post',
        url:'/login',
        data
    })
}

export const getUserById = (id)=> {
    return axios({
        url:`/user/${id}`,
    })
}
export const updateUserById = (id,data)=> {
    return axios({
        method:'post',
        url:`/user_update/${id}`,
        data
    })
}

export const Register = (data)=> {
    return axios({
        method:'post',
        url: '/register',
        data
    })
}