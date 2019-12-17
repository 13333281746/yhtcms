const axios = require('axios')
export default function fecthc(url,types,data,info){
    let result=axios(
        {
            url:url,
            headers:{
                "content-type":"application/x-www-form-urlencoded"
            },
            method:types,
            data:'username='+data.username+'&userpwd='+data.userpwd+'&userclass='+data.userclass+'&type='+data.usertype+'&m='+info
        }
    )
    return result;
}


