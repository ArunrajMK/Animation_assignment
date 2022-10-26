import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DETAIL_FAILURE, GET_DETAIL_REQUEST, GET_DETAIL_SUCCESS } from "./action"


const initState = {
isLoading:false,
isError:false,
data:[],
details:[]
}


export const dataReducer = (state=initState, action)=>{

switch(action.type){

case GET_DATA_REQUEST:
    return({
        ...state,
        isLoading:true,
        isError:false
    })

    case GET_DATA_SUCCESS:
    return({
        ...state,
        isLoading:false,
        isError:false,
        data:action.payload
    })


    case GET_DATA_FAILURE:
    return({
        ...state,
        isLoading:false,
        isError:true
    })

    case GET_DETAIL_REQUEST:
        return({
            ...state,
            isLoading:true,
            isError:false
        })
    
        case GET_DETAIL_SUCCESS:
        return({
            ...state,
            isLoading:false,
            isError:false,
            details:action.payload
        })
    
    
        case GET_DETAIL_FAILURE:
        return({
            ...state,
            isLoading:false,
            isError:true
        })
    

    default:
        return({
            ...state
        })
}


}