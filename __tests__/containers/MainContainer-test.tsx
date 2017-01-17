import * as React from 'react';
import { shallow, mount, render } from 'enzyme';

import { MainContainer } from 'containers/Main/MainContainer';

describe('A suite', function() {

  it('should render without throwing an error', function() {
    const wrapper = shallow(<MainContainer />);
    expect(wrapper.contains(<div className='color' onClick={wrapper.instance()['handleDivClick']}>Name: Tyler</div>)).toBe(true);
  });

  it('should be selectable by class "color"', function() {
    expect(shallow(<MainContainer />).is('.color')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<MainContainer />).find('.color').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<MainContainer />).text()).toEqual('Name: Tyler');
  });

  it('should change text content on click', function() {
    // Render a checkbox with label in the document
    const mainContainer = shallow(
      <MainContainer />
    );

    expect(mainContainer.text()).toEqual('Name: Tyler');

    mainContainer.find('div').simulate('click');

    expect(mainContainer.text()).toEqual('Name: John');
  });
});
