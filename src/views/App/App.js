import React from 'react';
import Character from 'components/Character/Character';
import GlobalStyles from 'Themes/GlobalStyles';

const publicKey = '7fdc3b3b1bb5e7cf21e75d9f18527565';
const charactersURL = `https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=${publicKey}&hash=72402047ce00fbd113138a43ff0c86ad`;
// https://gateway.marvel.com:443/v1/public/characters?apikey

// http://gateway.marvel.com/v1/public/events/29/characters?limit=58&ts=1&apikey   war
class App extends React.Component {
  state = {
   
  };

  componentDidMount() {
    this.handleDataFetch();
  }

  handleDataFetch = () => {
    const characters = fetch(charactersURL, { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  };

  render() {
    return (
      <div>
        <GlobalStyles />
        <Character
          name="Steve"
          surname="Rogers"
          img="http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/standard_large.jpg"
        />
      </div>
    );
  }
}

export default App;
