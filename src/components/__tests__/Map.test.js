import React from 'react';
import { shallow } from 'enzyme';
import Map from '../Map';

describe('Map', function() {
  let mountedMap;
  let props;

  beforeEach(() => {
    props = {
      location: undefined,
      imagename: 'testmap.png'
    };
    mountedMap = shallow(<Map {...props} />);
  });

  it('renders without crashing', () => {
    let mountedMap = shallow(<Map />);
  });

  it('contains a image', () => {
    const img = mountedMap.find('img');
    expect(img.length).toBe(1);
  });

  it('displays the none map when no params are given', () => {
    let defaultMap = shallow(<Map />);
    const defaultImage = defaultMap.find('img [src="images/none.png"]');
    expect(defaultImage.length).toBe(1);
  });

  it('displays the map imagename passed to it', () => {
    const testMap = mountedMap.find('img [src="images/testmap.png"]');
    expect(testMap.length).toBe(1);
  });
});
