import Header from '../../client/src/components/Header.jsx';
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
// import {expect} from 'chai';

describe('<Header />', () => {
  describe('render()', () => {
    test('should test if component header allow tp set props', () => {
      // const wrapper = shallow(<Header />);
      const wrapper = shallow(<Header />);
      // wrapper.setProps({ foo: 'buz'});
      // expect(wrapper.props()).to.equal('fooz');
      // expect(wrapper.props().foo).to.equal('buz');
      expect(wrapper).toMatchSnapshot();
    }) ;
  })
})