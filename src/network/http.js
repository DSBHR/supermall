import axios from 'axios'

export function request(config) {

  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 100
  })
  //2.1 axios 的request拦截器
  instance.interceptors.request.use(config =>{
   // console.log(config);
    return config
  },err => {
    console.log(err);
  })

  //2.2 axios 的request拦截器
  instance.interceptors.response.use(res =>{
  //  console.log(res);
    return res.data
  },err => {
    console.log(err);
  })

  return instance(config)

}
