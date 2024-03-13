//对于axios进行二次封装
import axios from 'axios';
//引入进度条
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'
//利用axios对象的方法，去创建一个axios实例
const requests = axios.create({
    //配置对象
    //基础路径，发请求的时候，路径当中会出现api
    // baseURL:'/api',
    //代表请求超时的时间5S
    timeout: 5000,
});
//请求拦截器
requests.interceptors.request.use((config) => {

    //进度条开始动
    nprogress.start();
    return config;
    // return config;
}, error => {
    console.log('err:', error)
    // if(error.code === '')
})

//响应拦截器
requests.interceptors.response.use((res) => {
    nprogress.done();
},
    (error) => {
        // 如果未登录跳转户登录页面 50223
        
    })
//对外暴露
export default requests;