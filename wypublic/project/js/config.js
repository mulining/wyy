// 用户保存session信息
// 每次ajax访问服务器将保存session id
// 用于用户登录认证
axios.defaults.withCredentials = true;
let config = {//配置基本url，方便维护
    baseUrl:"http://localhost:8000",
}