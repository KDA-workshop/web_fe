import Navigation from "Navigation";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";

function configureStore(initialState) {
    const enhancer = applyMiddleware(thunkMiddleware);
    const store = createStore(rootReducer, initialState, enhancer);
    return store;
}

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
}

export default App;
