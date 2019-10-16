import React from 'react';
import { shallow } from 'enzyme';
import StoreLocator from '../StoreLocator';
import axios from 'axios';
import renderer from 'react-test-renderer';

describe('StoreLocator', function() {
  let mountedStoreLocator;
  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it('renders correctly', () => {
    // we're just rendering the StoreLocation,
    // and the first time this runs, it's going to store it inside of a folder called snapshots inside of the __tests__ directory as this JSON file
    const tree = renderer.create(<StoreLocator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls axios.get in #componentDidMount', () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalled();
      });
  });

  it('calls axios.get with correct url', () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalledWith(
          'http://localhost:3000/data/shops.json',
        );
      });
  });

  it('updates state with api data', () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(mountedStoreLocator.state()).toHaveProperty('shops', [
          {
            location: 'test location',
            address: 'test address',
          },
        ]);
      });
  });

  it('renders without crashing', function() {
    //const div = document.createElement("div");
    // ReactDOM.render(<StoreLocator />, div);
  });

  it(
    ('renders a header',
    () => {
      const headers = mountedStoreLocator.find('Header');
      expect(headers.length).toBe(1);
    }),
  );

  /*
  it('renders two buttons', () => {
    const buttons = mountedStoreLocator.find('Button');
    expect(buttons.length).toBe(2);
  }); 
*/
  it('renders a Map', () => {
    const maps = mountedStoreLocator.find('Map');
    expect(maps.length).toBe(1);
  });
});

describe('chooseMap', () => {
  it('update this.state.currentMap using the location passed to it', () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
    let mockEvent = { target: { value: 'testland' } };
    mountedStoreLocator.instance().chooseMap(mockEvent);
    expect(mountedStoreLocator.instance().state.currentMap).toBe(
      'testland.png',
    );
  });
});
