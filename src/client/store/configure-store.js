import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { filmReducer } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    filmState: filmReducer,
});


const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;