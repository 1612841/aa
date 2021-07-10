// co nhiem vu dispatch action nao do - (King)
import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { Error } from 'react-redux-form';
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
    // cập nhật thông báo lỗi
    .then(response => {
        if (response.ok) {
            return response; //sau khi ok thì then thứ 2,3 mới hoạt động, còn ko oke nó sẽ chạy 1 trong 2 cái lỗi rồi đến catch hoạt động
        } else {
            var error = new Error('Error' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error; }
        
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)))
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
    .then(response => {
        if (response.ok) {
            return response; //sau khi ok thì then thứ 2,3 mới hoạt động, còn ko oke nó sẽ chạy 1 trong 2 cái lỗi rồi đến catch hoạt động
        } else {
            var error = new Error('Error' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error; }
        
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
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
    .then(response => {
        if (response.ok) {
            return response; //sau khi ok thì then thứ 2,3 mới hoạt động, còn ko oke nó sẽ chạy 1 trong 2 cái lỗi rồi đến catch hoạt động
        } else {
            var error = new Error('Error' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error; }
        
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(promotions => dispatch(addPromos(promotions)))
    .catch(error => dispatch(promosFailed(error.message)));
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