// taoj 4 reducers khac nhau 

import {LEADERS} from '../shared/leaders';

export const Leaders = (state = LEADERS, action) => {
    switch(action.type) {    //mac dinh data DISHES se co the duoc tra ve gia tri ban dau khi lam viec voi state
        default:
            return state;
    }
}