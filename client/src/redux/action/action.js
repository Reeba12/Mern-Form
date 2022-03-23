import { ADD_USER } from "./actionType";

export const User=(Input,value)=>{
    return{
        type:ADD_USER,
        id: new Date().getTime().toString(),
        payload:{
            Input:Input,
            value:value
        }
    }
}