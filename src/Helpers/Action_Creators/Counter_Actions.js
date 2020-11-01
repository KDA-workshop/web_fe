

import API from 'Services/API';
import * as types from '../Action_Types/Counter_Types';

/*
    Testing purposes
*/

// Non API action
export const INCREMENT = () => {
    return dispatch => {
        dispatch({
            type: types.INCREMENT
        });
    }
};

export const DECREMENT = () => {
    return dispatch => {
        dispatch({
            type: types.DECREMENT
        });
    }
};


// API action
// export const TEST = () => {
//     return dispatch => {
//         const config = {
//             method: 'post',
//             url: someEndPoint,
//             headers: {
//                 'Authorization': token,
//                 'Content-Type': 'application/json'
//             },
//             data: payload
//         }
//         const data = API(config);
//         dispatch({
//             type: types.,
//             payload: data
//         });
//     }
// };