import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from '../js/components/Header';

describe('<Header />', () => {

  it("Class exist on root container", () => {
    expect(shallow(<Header />).is('.borderBottom')).toBe(true);
  });

  it("Find if element exist", () => {
    expect(mount(<Header />).find('.text-muted').length).toBe(1);
  });
});
