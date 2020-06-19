

const CategoryReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case "RECEIVE_CATEGORIES":
            debugger
            const nextState = Object.assign({}, state);
            for (let i = 0; i < action.categories.length; i++) {
                const category = action.categories[i];
                nextState[category._id] = category;
            }
            return nextState;
        default:
            return state;
    }
};

module.exports = CategoryReducer;