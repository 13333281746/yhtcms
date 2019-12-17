import fetchc from './fetch'
//定义基础路径
const BASE_URL='http://www.qhdlink-student.top/student';

//请求登录数据
export const getUserData=(data)=>fetchc(BASE_URL+'/login.php','POST',data)
export const getNewsData=(data)=>fetchc(BASE_URL+'/newsa.php','POST',data)
export const getBannerData=(data)=>fetchc(BASE_URL+'/banner.php','POST',data)
export const getStaffData=(data)=>fetchc(BASE_URL+'/coach.php','POST',data)
export const getVarietyData=(data)=>fetchc(BASE_URL+'/coacha.php','POST',data)
export const getInfoData=(data,info)=>fetchc(BASE_URL+'/newsinfo.php','POST',data,info)