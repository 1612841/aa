// taoj 4 reducers khac nhau - la noi initial action hanh dong bang dispatch of ActionCreators
import {COMMENTS} from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch(action.type) {    //mac dinh data COMMENTS se co the duoc tra ve gia tri ban dau khi lam viec voi state
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return state.concat(comment);
       
        default:
            return state;
    }
}