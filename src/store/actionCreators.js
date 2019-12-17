import * as constants from './actionTypes'
import {getUserData} from './../Api/index'
import {getNewsData} from './../Api/index'
import {getBannerData} from './../Api/index'
import {getStaffData} from './../Api/index'
import {getVarietyData} from './../Api/index'
import {getInfoData} from './../Api/index'
export const getNewsDataAction=(data)=>{
    return(dispatch)=>{
        getNewsData(data).then(value=>{
                    const newsData=value.data;
                    dispatch({
                        type:constants.INIT_NEWS_DATA,
                        newsData
                    })
            })      
    }
}
export const getUserDataAction=(data,callback)=>{
    return(dispatch)=>{
        getUserData(data).then(value=>{
            if(value.data==='ok'){
                    const userData=data;
                    dispatch({
                        type:constants.INIT_USER_DATA,
                        userData
                    })
                    callback && callback(userData)
                }else{
                    alert('用户名或密码错误！')
                }   
        })   
    }
}
export const getBannerDataAction=(data)=>{
    return(dispatch)=>{
        getBannerData(data).then(value=>{
            const bannerData=value.data;
                dispatch({
                    type:constants.INIT_BANNER_DATA,
                    bannerData
                })
        })   
    }
}
export const getStaffDataAction=(data)=>{
    return(dispatch)=>{
        getStaffData(data).then(value=>{
            const staffData=value.data;
                dispatch({
                    type:constants.INIT_STAFF_DATA,
                    staffData
                })
        })   
    }
}
export const getVarietyDataAction=(data)=>{
    return(dispatch)=>{
        getVarietyData(data).then(value=>{
            const varietyData=value.data;
                dispatch({
                    type:constants.INIT_VARIETY_DATA,
                    varietyData
                })
        })   
    }
}
export const getInfoDataAction=(data,info)=>{
    return(dispatch)=>{
        getInfoData(data,info).then(value=>{
            const infoData=value.data;
                dispatch({
                    type:constants.INIT_INFO_DATA,
                    infoData
                })
        })   
    }
}
