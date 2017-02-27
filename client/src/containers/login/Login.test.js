import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Login from './Login';
import {initialState as loginComponent } from '../../reducers/reducer_login';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Login/>', () => {
    
    it('render with default props', () => {
        const store = mockStore({ loginComponent });
        const wrapper = shallow(<Login store={store} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('dispatch an action to authenticate user', () => {

    });

});