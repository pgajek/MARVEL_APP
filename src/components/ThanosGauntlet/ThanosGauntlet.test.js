import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'tests/testUtils';
import ThanosGauntlet from 'components/ThanosGauntlet/ThanosGauntlet';

const defaultProps = {
  click: () => {},
  animate: false,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ThanosGauntlet {...setupProps} />);
};

it('renders withour crashing', () => {
  const wrapper = setup();
  expect(wrapper.length).toBe(1);
});

it('does not throw error with expected props', () => {
  expect(checkProps(ThanosGauntlet, defaultProps)).toBeUndefined();
});

it('it changing props properly if clicked', () => {
  let bool = false;
  const wrapper = setup({
    click: () => (bool = true),
    animate: false,
  });
  wrapper.dive().simulate('click');
  expect(bool).toBe(true);
});
