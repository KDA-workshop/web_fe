import * as actions from 'Helpers/Action_Types/Counter_Types';

const initialState = {
    count: 0
};

const counter = (state = initialState, action) => {

    switch (action.type) {
        case actions.INCREMENT:
        return Object.assign({}, state, {
            count: state.count + 1
        });

        case actions.DECREMENT:
        return Object.assign({}, state, {
            count: state.count === 0 ? state.count : state.count - 1
        });
    
        default:
        return state;
    }

}

export default counter;