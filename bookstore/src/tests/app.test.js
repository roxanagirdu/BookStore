
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { expect } from 'chai';

describe('<App />', () => {
it('should have 3 books as an initial state', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.state().books).to.have.length(3);
  });
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
});