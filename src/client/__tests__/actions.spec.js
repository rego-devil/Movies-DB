import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { startFetchFilms, getFilms, asyncGetFilms, async_addInputs } from '../actions/films';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';


describe('>>>A C T I O N --- Test film actions', () => {
  const mockStore = configureStore([thunk]);

  it('action creators start Fetch Films', () => {
    const isFetching = startFetchFilms();
    expect(isFetching).toEqual({ type: 'START_FETCH_FILMS_REQUEST' });
  });

  it('action creators get Films', () => {
    const data = [{ value: 'someValue1' }, { value: 'someValue2' }];
    const result = getFilms(data, data.length);
    expect(result).toEqual({ type: 'GET_FILMS_SUCCESS', payload: data, count: data.length });
  });

  it('+++ thunk async GetFilms', async () => {
    const store = mockStore();
    await store.dispatch(asyncGetFilms({ search: '', searchBy: 'title' }));

    expect(store.getActions()[0]).toEqual({ type: 'START_FETCH_FILMS_REQUEST' });
    expect(store.getActions()[1].type).toEqual('GET_FILMS_SUCCESS');
  });
});
