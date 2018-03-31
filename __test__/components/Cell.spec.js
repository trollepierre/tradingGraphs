import React from 'react'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import Cell from '../../src/components/Cell'

const value = { "timestamp": 1522088675779, "index": 1171, "stocks": { "NASDAQ": 5.4068, "CAC40": 39.45096 } }

// Snapshot for Cell React Component
xdescribe('>>>CELL --- Snapshot', () => {
  it('+++capturing Snapshot of Cell', () => {
    const renderedValue = renderer.create(<Cell type='CAC40' value={value}/>).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });

});

xdescribe('>>>CELL --- Shallow Render REACT COMPONENTS', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Cell type='CAC40' value={value}/>)
  })

  it('+++ render the DUMB component', () => {
    // expect(wrapper.length).toEqual(1)
  });

  it('+++ contains td CAC40', () => {
    // expect(wrapper.find('td').at(0).nodes[0].key).toBe('CAC40-1171');
    // expect(wrapper.find('td').at(0).nodes[0].props.children).toBe(39.45);
  });
});
