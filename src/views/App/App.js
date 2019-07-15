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
    // if (localStorage.characterData) {
    //   this.setState({
    //     characters: Promise.resolve(JSON.parse(localStorage.characterData)),
    //   });
    // }
    fetch(charactersURL, { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        console.log(data.data.results);
        localStorage.charactersData = JSON.stringify(data.data.results);
        this.setState({
          characters: data.data.results,
        });
      })
      .catch(err => console.log(err));
  };

  handleGauntletClick = () => {
    const { animate } = this.state;
    if (!animate) this.snapSound.play();
    this.setState(prevState => ({
      animate: !prevState.animate,
    }));
  };

  render() {
    const { animate, characters } = this.state;
    const charactersNew = characters.map(character => {
      const characterName = character.name.replace(/\(.*\)/, '');
      return (
        <Character
          name={characterName}
          key={character.id}
          img={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
        />
      );
    });
    return (
      <div>
        <GlobalStyles />
        <ThanosGauntlet click={this.handleGauntletClick} animate={animate} />
        <CharactersWrapper>{charactersNew}</CharactersWrapper>
      </div>
    );
  }
}

export default App;
