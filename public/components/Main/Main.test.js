import React from 'react';
import renderer from 'react-test-renderer';
import Main from './Main';

describe('Main', () => {
  it('should render correctly if data is loaded', () => {
    const data = {
      description: 'description',
      details: [{}],
      media: [],
      name: 'name',
      phoneNumber: 'phoneNumber',
      location: {},
      price: 'price',
      starRating: 'starRating',
    };
    const component = renderer.create(<Main data={data} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should not render if data is not loaded', () => {
    const component = renderer.create(<Main data={{}} />);
    const tree = component.toJSON();
    expect(tree).toEqual(null);
  });
});
