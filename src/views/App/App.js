import React from 'react';
import Character from 'components/Character/Character';
import GlobalStyles from 'Themes/GlobalStyles';
import ThanosGauntlet from 'components/ThanosGauntlet/ThanosGauntlet';
import CharactersWrapper from 'components/CharactersWrapper/CharactersWrapper';
import snapsound from 'assets/thanos_snap_sound.mp3';

const publicKey = '7fdc3b3b1bb5e7cf21e75d9f18527565';
const charactersURL = `http://gateway.marvel.com/v1/public/events/29/characters?limit=58&ts=1&apikey=${publicKey}&hash=72402047ce00fbd113138a43ff0c86ad`;

class App extends React.Component {
  state = { characters: [], animate: false };

  snapSound = new Audio(snapsound);

  componentDidMount() {
    this.handleDataFetch();
  }

  handleDataFetch = () => {
    if (localStorage.getItem('charactersData')) {
      console.log(localStorage.getItem('charactersData'));
      this.setState({
        characters: JSON.parse(localStorage.getItem('charactersData')),
      });
    }
    fetch(charactersURL, { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        const mappedCharacters = data.data.results;
        mappedCharacters.forEach(char => (char.dead = false));
        localStorage.setItem('charactersData', JSON.stringify(mappedCharacters));
        console.log(data.data.results);
        this.setState({
          characters: mappedCharacters,
        });
      })
      .catch(err => console.log('something gone wrong:  ', err));
  };

  killCharacter = deadQuantity => {
    const { characters } = this.state;
    if (deadQuantity > 0) {
      const index = Math.floor(Math.random() * characters.length);
      const chosenOne = characters[index];
      chosenOne.dead = true;
      this.setState({
        characters,
      });
      setTimeout(() => {
        this.killCharacter(deadQuantity - 1);
      }, 1000);
    } else {
      this.setState({
        animate: false,
      });
    }
  };

  halfTheCharacters = () => {
    const alive = this.state.characters.filter(character => character.dead === false);
    const deadQuantity = Math.floor(alive.length / 2);

    setTimeout(() => {
      this.killCharacter(deadQuantity);
    }, 1000);
  };

  handleGauntletClick = () => {
    const { animate } = this.state;
    if (!animate) {
      // this.snapSound.play();
      this.setState(prevState => ({
        ...prevState,
        animate: !prevState.animate,
      }));
      this.halfTheCharacters();
    }
  };

  render() {
    const { animate, characters } = this.state;
    const charactersNew = characters.map(character => {
      if (character.id !== 1009726 && character.id !== 1009165 && character.id !== 1009299) {
        const characterName = character.name.replace(/\(.*\)/, '');
        return (
          <Character
            name={characterName}
            key={character.id}
            img={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
            dead={character.dead}
            data-test="character-component"
          />
        );
      }
    });
    return (
      <>
        <GlobalStyles />
        <ThanosGauntlet click={this.handleGauntletClick} animate={animate} />
        <CharactersWrapper>{charactersNew}</CharactersWrapper>
      </>
    );
  }
}

export default App;
