import { shallow } from 'enzyme';
import React from 'react';
import App from 'views/App/App';
import CharactersWrapper from 'components/CharactersWrapper/CharactersWrapper';
import ThanosGauntlet from 'components/ThanosGauntlet/ThanosGauntlet';
import Character from 'components/Character/Character';

const setup = () => {
  return shallow(<App />);
};
describe('<App/>', () => {
  test('it renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1);
  });
  const initialState = {
    animate: false,
    characters: [
      {
        name: 'noob',
        id: 1,
        thumbnail: {
          path: 'ttt',
          extension: '.jpg',
        },
        dead: false,
      },
      {
        name: 'boob',
        id: 2,
        thumbnail: {
          path: 'ttewrt',
          extension: '.jpg',
        },
        dead: false,
      },
    ],
  };
  describe('renderin chracters', () => {
    const wrapper = setup();

    test('it renders CharactersWrapper', () => {
      expect(wrapper.containsMatchingElement(<CharactersWrapper />)).toEqual(true);
    });

    test('it not render any CharacterComponents if state is empty ', () => {
      expect(wrapper.find(Character).length).toBe(0);
    });

    test('it renders characters inside characterswrapper', () => {
      wrapper.setState(initialState);
      expect(wrapper.find('CharacterComponent').length).toBe(2);
    });
  });

  describe('thanos gauntlet tests', () => {
    const wrapper = setup();
    const component = wrapper.find(ThanosGauntlet);
    const wrapperInstance = wrapper.instance();

    test('renders thanos gauntlet', () => {
      expect(component.length).toBe(1);
    });

    test('it passes handleThanosGauntledClick to ThanosGauntled as a props', () => {
      expect(component.prop('click')).toEqual(wrapperInstance.handleGauntletClick);
    });

    test('it receives state.animate as animate props', () => {
      expect(component.prop('animate')).toEqual(wrapper.state('animate'));
    });

    test('clicking TanosGauntlet changing state correctly', () => {
      wrapper.setState({ animate: false });
      component.dive().simulate('click');
      expect(wrapper.state('animate')).toBe(true);
    });
  });

  describe('functions', () => {
    const wrapper = setup();
    describe('handleThanosGauntletClick', () => {
      let gauntletClickSpy;
      let wrapperInstance;
      beforeEach(() => {
        wrapperInstance = wrapper.instance();
        gauntletClickSpy = jest.spyOn(wrapperInstance, 'handleGauntletClick');
        wrapperInstance.handleGauntletClick();
      });
      test('gauntletClick is being called correctly', () => {
        expect(gauntletClickSpy).toHaveBeenCalledTimes(1);
      });
      test('handleGauntletClick changes state correctly', () => {
        expect(wrapperInstance.state.animate).toEqual(true);
      });
    });
    describe('killCharacter', () => {
      let killCharacterSpy;
      let wrapperInstance;
      beforeEach(() => {
        wrapperInstance = wrapper.instance();
        killCharacterSpy = jest.spyOn(wrapperInstance, 'killCharacter');
        wrapperInstance.setState(initialState);
      });
      test('killCharacter is being called once if param is equal to 0', () => {
        wrapperInstance.killCharacter(0);
        expect(killCharacterSpy).toHaveBeenCalledTimes(1);
      });
      test('killCharacter is being calle more than one if param is not equal to 0', () => {
        wrapperInstance.killCharacter(1);
        expect(killCharacterSpy).not.toHaveBeenCalledTimes(1);
      });
      test('killCharacters seting state.animate to false if arg is equal to 0', () => {
        wrapperInstance.killCharacter(0);
        expect(wrapperInstance.state.animate).toEqual(false);
      });
    });
    describe('halfTheCharacters', () => {
      let halfTheCharactersSpy;
      let wrapperInstance;
      beforeEach(() => {
        wrapperInstance = wrapper.instance();
        halfTheCharactersSpy = jest.spyOn(wrapperInstance, 'halfTheCharacters');
      });
      test('halfTheCharacters is being called correctly', () => {
        wrapperInstance.halfTheCharacters();
        expect(halfTheCharactersSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
