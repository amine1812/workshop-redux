import { INCREMENT,DECREMENT } from "./action-type";

export const incrementHandler = ()=> { 
    return { 
        type: INCREMENT 
        
    }
}


export const decrementHandler = ()=> { 
    return { 
        type: DECREMENT
        
    }
}