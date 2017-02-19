import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Foo from '../js/components/Header';

describe("A suite", function() {
  it("contains spec with an 1", function() {
    expect(shallow(<Foo />).contains(<div className="masthead" />)).toBe(true);
  });

  it("contains spec with an 2", function() {
    expect(shallow(<Foo />).is('.masthead')).toBe(true);
  });

  it("contains spec with an 3", function() {
    expect(mount(<Foo />).find('.masthead').length).toBe(1);
  });
});
