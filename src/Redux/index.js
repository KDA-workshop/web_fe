import { combineReducers } from 'redux';
import * as reducer from './reducer';

const createReducer = (reducerName, defaultStateParam) => {
    return (state, action) => {
        state = state || defaultStateParam || reducer[reducerName].initialState;
        switch (action.type) {
            case `${reducerName}`:
                return Object.assign({}, action.payload);
            default:
                return state;
        }
    };
};


// Assign reducer below
const rootReducer = combineReducers({
    counter: createReducer(reducer.COUNTER.name, reducer.COUNTER.initialState)
});

export default rootReducer;