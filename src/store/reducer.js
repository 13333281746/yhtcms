import * as constants from './actionTypes'

const defaultState={
    newsData:{},
    userData:{},
    bannerData:{},
    staffData:{},
    varietyData:{},
    infoData:{},
};

export default(state = defaultState,action)=>{
    if(action.type === constants.INIT_NEWS_DATA){
        const newState = JSON.parse(JSON.stringify(state))
        newState.newsData=action.newsData;
        return newState;
    }
    else if(action.type === constants.INIT_USER_DATA){
        const newState = JSON.parse(JSON.stringify(state))
        //把用户数据存入本地
        sessionStorage.setItem('userData',JSON.stringify(action.userData))
        newState.userData=action.userData;
        return newState;
    }
    else if(action.type === constants.INIT_BANNER_DATA){
        const newState = JSON.parse(JSON.stringify(state))
        newState.bannerData=action.bannerData;
        return newState;
    }
    else if(action.type === constants.INIT_STAFF_DATA){
        const newState = JSON.parse(JSON.stringify(state))
        newState.staffData=action.staffData;
        return newState;
    }
    else if(action.type === constants.INIT_VARIETY_DATA){
        const newState = JSON.parse(JSON.stringify(state))
        newState.varietyData=action.varietyData;
        return newState;
    }
    else if(action.type === constants.INIT_INFO_DATA){
        const newState = JSON.parse(JSON.stringify(state))
        newState.infoData=action.infoData;
        return newState;
    }
    return state;
}