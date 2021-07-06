// taoj 4 reducers khac nhau 

import {DISHES} from '../shared/dishes';

export const Dishes = (state = DISHES, action) => {
    switch(action.type) {    //mac dinh data DISHES se co the duoc tra ve gia tri ban dau khi lam viec voi state
        default:
            return state;
    }
}