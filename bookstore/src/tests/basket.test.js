import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ShippingDetails from '../js/components/ShippingDetails';
import { mount, shallow } from 'enzyme';
import CreditCard from '../js/components/CreditCard';
import { expect } from 'chai';

describe('<ShippingDetails />', () => {
  it('contains an <CreditCard/> component', function () {
    const wrapper = shallow(<ShippingDetails/>);
    expect(wrapper.find(CreditCard)).to.have.length(1);
  });
  });