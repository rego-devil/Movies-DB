import React from 'react';
import ReactDOM from 'react-dom';
import {HelloComponent} from '../../components/hello';

describe('Hello Component Mounting', () => {
    it('renders without crashing', () => {
        const emptyDiv = document.createElement('div');
        ReactDOM.render(<HelloComponent />, emptyDiv);
    });
});