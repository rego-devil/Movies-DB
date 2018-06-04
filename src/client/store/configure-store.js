import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { filmReducer } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    filmState: filmReducer,
});


export default (initialState) => {
    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
    
    return store;
}