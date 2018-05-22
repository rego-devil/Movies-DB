import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {HeaderContainer} from '../containers/header-container';
import {Header} from '../components/header';
import { Provider } from 'react-redux';
import { showFilmDetails, choiceSearchBy, asyncGetFilms } from '../actions';
import configureStore from 'redux-mock-store';

describe('>>>H E A D E R --- REACT-REDUX (Shallow + passing the {store} directly)', () => {

    const initialState = { 
        currentFilmDetails: null
    };

    const mockStore = configureStore();
    let store,container;

    beforeEach(()=>{
        store = mockStore({filmState: initialState});
        container = shallow(<HeaderContainer store={store} /> );
        // container = mount( <Provider store={store}><HeaderContainer /></Provider> );
       
    })

    it('+++ render the connected(SMART) component', () => {
        expect(container.length).toEqual(1);
    });

    it('+++ check Prop matches with initialState', () => {
        expect(container.find(Header).prop('currentFilmDetails')).toEqual(initialState.currentFilmDetails);
    });

    it('+++ check action on dispatching ', () => {
        
        store.dispatch(showFilmDetails(null));
        store.dispatch(choiceSearchBy('title'));
        
        const action = store.getActions();
        console.log(action);
        
        expect(action[0].type).toBe("SHOW_FILM_DETAILS");
        expect(action[1].type).toBe("CHOICE_SEARCH_BY");
    });

});