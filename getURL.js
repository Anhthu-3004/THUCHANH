var url=require('url')
const getPath=(req)=>{
    return req.url;
}
const getParamsURl=(req)=>{
    let urlData = url.parse(req.url, true);
    return JSON.stringify(urlData.query);
}
export {getPath,getParamsURl}