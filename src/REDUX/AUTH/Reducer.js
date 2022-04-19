import { ALLUSERS, LOGIN, LOGOUT} from "./Action";

const initial = { 
    auth:false,
    userData : {},
    AllUsers:[]
}

export const LoginReducer = (store=initial,{type,payload})=>{
    switch(type){
        case LOGIN: return {...store,auth:true,userData:payload}
        case ALLUSERS : return {...store,AllUsers:payload,auth:true}
        case LOGOUT: return {...initial}
        default: return store
    }
}