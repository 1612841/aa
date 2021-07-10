// co nhiem vu dispatch action nao do - (King)
import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
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

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    /* setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000); */
    // fetch noi dung truc tiep tu json-server
    return fetch(baseUrl + 'dishes')
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


export const fetchComments = () => (dispatch) => {

    dispatch(dishesLoading(true));

    /* setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000); */
    // fetch noi dung truc tiep tu json-server
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
}
export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promotions => dispatch(addPromos(promotions)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});