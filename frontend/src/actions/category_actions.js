import * as APIUtil from '../util/category_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";


const receiveCategories = categories =>({
    type: RECEIVE_CATEGORIES,
    categories
});

export const fetchCategories = () => dispatch =>(
    APIUtil.fetchCategory().then(
        categories => dispatch(receiveCategories(categories.data))
    )
);
