import React from 'react';
import { shallow, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Header from './Header';
import configureMockStore from 'redux-mock-store';
import {initialState as sessionSate } from '../../reducers/rd_session';
const mockStore = configureMockStore();

it('renders without crashing', () => {
    const store = mockStore({ sessionSate });
    shallow(<Header store={store} />);
});
