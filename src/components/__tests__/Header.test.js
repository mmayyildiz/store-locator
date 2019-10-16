import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header', function() {
  let mountedHeader;
  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  });
  it('renders without crashing', function() {
    shallow(<Header />);
  });
  // Enzyme's fin method uses JQuery or CSS style selectors
  // So to find an attribute, we use square brackets
  it('renders a logo', () => {
    let logoImg = mountedHeader.find(
      'img [src="images/wired-brain-coffee-logo.png"]'
    );
    expect(logoImg.length).toBe(1);
  });
});
