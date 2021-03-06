// taoj 4 reducers khac nhau - la noi initial action hanh dong bang dispatch of ActionCreators
import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
    errMess: null,
    comments: []}, action) => {
    // them 2 state cho state of comment
    
    switch(action.type) {    //mac dinh data COMMENTS se co the duoc tra ve gia tri ban dau khi lam viec voi state
        case ActionTypes.ADD_COMMENTS:
             return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
             return {...state, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            return { ...state, comments: state.comments.concat(comment)};
        /* case ActionTypes.ADD_COMMENT:
            var comment = action.payload; //comment đã có cấu trúc state giống payload
            comment.id = state.length;  // comment chèn thêm vào một state mới id:
            comment.date = new Date().toISOString(); // comment chèn thêm vào state mới date:
            console.log("Comment: ", comment);
            return state.concat(comment); */
       
        default:
            return state;
    }
}