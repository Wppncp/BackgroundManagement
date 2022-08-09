import axios  from "axios";
import config from '../config/index'
import {ElMessage} from 'element-plus'
const NEtWORK_ERROR = '网络请求异常'

//创建axios实例对象
const service = axios.create({
    baseURL: config.baseApi
})
//请求之前
service.interceptors.request.use((req)=>{
    //可以自定义header
    //jwt-token 认证的时候
    return req
})

//请求之后
service.interceptors.response.use((res)=>{
    // console.log(res)
    const {code,data,msg} = res.data
    if(code == 200){
        return data
    }else{
        //网络请求错误
        ElMessage.error(meg || NEtWORK_ERROR)
        return Promise.reject(msg || NEtWORK_ERROR)
    }
})

//封装核心函数
function request(options){
    // {
    //     method:'get',
    //     dat:{},
    //     mock:false
    // }
    options.method = options.method||'get'
    if(options.method.toLowerCase() == 'get'){
        options.params = options.data
    }
    //mock处理
    let isMock = config.mock
    if(typeof options.mock !== 'undefined'){
        isMock = options.mock
    }
    //线上环境处理
    if(config.env == 'prod'){
        //线上不在mock
        service.defaults.baseURL = config.baseApi
    }else{
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
    }

    return service(options)
}
export default request