import React from 'react';
import { shallow, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Dashboard from './Dashboard';
import configureMockStore from 'redux-mock-store';
import {initialState as sessionSate } from '../../reducers/rd_session';
const mockStore = configureMockStore();

it('renders without crashing', () => {
    const store = mockStore({ sessionSate });
    shallow(<Dashboard store={store} />);
});
