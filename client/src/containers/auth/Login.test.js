import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Login from './Login';
import {initialState as sessionSate } from '../../reducers/rd_session';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


it('render with default props', () => {
    const store = mockStore({ sessionSate });
    const wrapper = shallow(<Login store={store} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('should dispatch an action to authenticate.js user', () => {

});

