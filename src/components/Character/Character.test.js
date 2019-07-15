import React from 'react';
import { shallow } from 'enzyme';
import Character from 'components/Character/Character';
import { checkProps } from 'tests/testUtils.js';

const defaultProps = {
  img: 'http://i.annihil.us/u/prod/marvel/i/mg/9/20/5102c774ebae7/standard_medium.jpg',
  name: 'Avengers',
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Character {...setupProps} />);
};

it('does not throw error with expected props', () => {
  checkProps(Character, defaultProps);
});

it('it renders without crashing', () => {
  const wrapper = setup();
  expect(wrapper.length).toBe(1);
});

it('renders just one image', () => {
  const component = setup();
  expect(component.find('[data-test="character-img"]').length).toBe(1);
});
