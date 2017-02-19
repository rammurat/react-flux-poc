import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Table from '../js/components/Table';

describe('<Table />', () => {

  it("Class exist on root container", () => {
    expect(shallow(<Table />).is('.table-cnt')).toBe(true);
  });

  it("Find if element exist", () => {
    expect(mount(<Table />).find('.table').length).toBe(1);
  });
    
});