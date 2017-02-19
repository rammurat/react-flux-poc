import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Footer from '../js/components/Footer';

describe('<Footer />', () => {

  it("Class exist on root container", () => {
    expect(shallow(<Footer />).is('.footer')).toBe(true);
  });

  it("Find if element exist", () => {
    expect(mount(<Footer />).find('.copyright').length).toBe(1);
  });
});
