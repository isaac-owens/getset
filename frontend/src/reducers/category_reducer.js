import {RECEIVE_CATEGORIES} from '../actions/category_actions';


const CategoryReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CATEGORIES:
            const nextState = Object.assign({}, action.categories);
            return nextState
        default:
            return state;
    }
};

export default CategoryReducer;