// taoj 4 reducers khac nhau 
import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes: []
}, action) => {
    switch(action.type) { 
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}
        
        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        //mac dinh data DISHES se co the duoc tra ve gia tri ban dau khi lam viec voi state
        default:
            return state;
    }
}