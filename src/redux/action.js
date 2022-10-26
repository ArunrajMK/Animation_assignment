import axios from "axios";

export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const GET_DETAIL_REQUEST = "GET_DETAIL_REQUEST";
export const GET_DETAIL_SUCCESS = "GET_DETAIL_SUCCESS";
export const GET_DETAIL_FAILURE = "GET_DETAIL_FAILURE";


const getDataRequest = ()=>{
    return({
        type:GET_DATA_REQUEST
    })
}


const getDataSuccess = (data)=>{
    return({
        type:GET_DATA_SUCCESS,
        payload:data
    })
}



const getDataFailure = ()=>{
    return({
        type:GET_DATA_FAILURE
    })
}

const getDetailRequest = ()=>{
    return({
        type:GET_DETAIL_REQUEST
    })
}


const getDetailSuccess = (data)=>{
    return({
        type:GET_DETAIL_SUCCESS,
        payload:data
    })
}



const getDetailFailure = ()=>{
    return({
        type:GET_DETAIL_FAILURE
    })
}



export const getData = (query,page,filter)=>(dispatch)=>{


  dispatch(getDataRequest())  
return axios({
    method:"GET",
    url:"https://api.jikan.moe/v4/anime",
    params:{
        q:query,
        page:page,
        type:filter,
        
       
    }
})
.then((res)=>{
  dispatch(getDataSuccess(res.data))
})
.then((err)=>{
dispatch(getDataFailure(err))
})


}




export const getDetail = (id)=>(dispatch)=>{

    

    dispatch(getDetailRequest())  
  return axios({
      method:"GET",
      url:`https://api.jikan.moe/v4/anime/${id}`,
     
     
  })
  .then((res)=>{
    dispatch(getDetailSuccess(res.data))
    console.log(res.data)
  })
  .then((err)=>{
  dispatch(getDetailFailure(err))
  })
  
  
  }