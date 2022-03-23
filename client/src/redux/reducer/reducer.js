import { ADD_USER } from "../action/actionType"

const initial_state=
{
    opt:[]
};
export const reducer=(state=initial_state,action)=>{
    // console.log(action.type)
    // console.log(...state.alldata)
    switch(action?.type){
        case ADD_USER:
            return {...state,opt:[...state?.opt]}
            // return {
            //     ...state.alldata,
            //     // newdata:{
            //         alldata:{
            //         id:action.id,
            //         Input:action.payload.Input,
            //         value:action.payload.value}
            //     // }
            // }
            default:
                return {state}
    }
}