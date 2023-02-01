import Get_Api  from "./actionType";

export const Reducer = (state = [], action)=>{
    switch (action.type) {
        case Get_Api:
            return action.payload;
        default:
            return state;
    }
};
