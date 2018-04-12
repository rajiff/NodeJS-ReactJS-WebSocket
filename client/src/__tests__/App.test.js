import React from 'react';
import { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';

Enzyme.configure({ adapter: new Adapter() });

describe('Rendering of <App />', function() {

  it('happily renders component', function() {
    const wrapper = mount(<App />);
    expect(wrapper, 'Only one instance of App component should exist').to.have.length(1);

    expect(wrapper.find('header')).to.have.length(1);
  });
});