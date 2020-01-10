import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
// http://127.0.0.1:3000
export default axios

// 设置拦截器
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前设置请求头 加上token值
    // console.log(config);
    let token = localStorage.getItem('ht_token')
    if(token) config.headers.Authorization = token
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据进行判断
    // 由于是js语法 跳转时要通过window来跳转

    if (response.data.message == '用户信息验证失败' || response.data.message == '用户信息验证失败!') window.location.href = '#/login'
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});