import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware, { END } from 'redux-saga';
import { filmReducer } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../sagas/rootSaga';

const reducers = combineReducers({
    filmState: filmReducer,
});

const sagaMiddleware = createSagaMiddleware();

export default (initialState) => {
    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(rootSaga);
    store.runSaga = () =>  sagaMiddleware.run(rootSaga);
    store.close = () => store.dispatch(END);
    
    return store;
}