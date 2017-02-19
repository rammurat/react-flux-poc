import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PieChart from '../js/components/PieChart';
import sinon from 'sinon';

describe('<PieChart />', () => {

  it("Class exist on root container", () => {
    expect(shallow(<PieChart />).is('.piechart-cnt')).toBe(true);
  });

  it("Find if element exist", () => {
    expect(mount(<PieChart />).find('.chart-area').length).toBe(1);
  });
    
    it("Find if button exist to load data", () => {
        expect(mount(<PieChart />).find('.load-data').length).toBe(1);
    });
    
    /*
   it('simulates click event on load chart', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <PieChart onButtonClick={onButtonClick} />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });*/

});
