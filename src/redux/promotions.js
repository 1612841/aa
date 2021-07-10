// taoj 4 reducers khac nhau 
import * as ActionTypes from './ActionTypes';

export const Promotions = (state = {
    isLoading: true,
    errMess: null,
    promotions:[]}, action) => {

    
    switch(action.type) {    //mac dinh data DISHES se co the duoc tra ve gia tri ban dau khi lam viec voi state
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};
    
            case ActionTypes.PROMOS_LOADING:
                return {...state, isLoading: true, errMess: null, promotions: []}
    
            case ActionTypes.PROMOS_FAILED:
                return {...state, isLoading: false, errMess: action.payload};
       
        default:
            return state;
    }
}