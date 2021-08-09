import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({});
export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middlewareEnchancer = applyMiddleware(...middlewares);
    const store = createStore(
        rootReducer,
        middlewareEnchancer
    );
    return store;
}