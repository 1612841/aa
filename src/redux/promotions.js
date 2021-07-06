// taoj 4 reducers khac nhau 

import {PROMOTIONS} from '../shared/promotions';

export const Promotions = (state = PROMOTIONS, action) => {
    switch(action.type) {    //mac dinh data DISHES se co the duoc tra ve gia tri ban dau khi lam viec voi state
        default:
            return state;
    }
}