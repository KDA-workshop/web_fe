import API from 'Services/api_call';

/*
    Testing purposes
*/

// Non API action
export const INCREMENT = (REDUCER, payload) => {
    return dispatch => {
        dispatch({
            type: REDUCER,
            payload
        });
    }
};

// API action
export const TEST = (REDUCER, payload, currentState) => {
    return dispatch => {
        const config = {
            // method: 'post',
            // url: someEndPoint,
            // headers: {
            //     'Authorization': token,
            //     'Content-Type': 'application/json'
            // },
            // data: payload
        }
        const data = API(config);
        dispatch({
            type: REDUCER,
            payload: data
        });
    }
};