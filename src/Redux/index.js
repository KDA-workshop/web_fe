import { combineReducers } from 'redux';
import counter from './Reducers/Counter';

// Assign reducer below
const rootReducer = combineReducers({
    counter
});

export default rootReducer;