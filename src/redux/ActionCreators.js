// co nhiem vu dispatch action nao do - (King)
import * as ActionTypes from './ActionTypes';

//tao ra action object
export const addComment =  (dishId, rating, author, comment)  =>  ({
    //de viet chu thich, noi dung da lam
    type: ActionTypes.ADD_COMMENT, 
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});