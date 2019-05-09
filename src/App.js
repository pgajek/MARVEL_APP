import React from "react";
import "./App.css";
import Character from './components/Character/Character';
const publicKey = "7fdc3b3b1bb5e7cf21e75d9f18527565";
const charactersURL = `http://gateway.marvel.com/v1/public/events/29/characters?limit=58&ts=1&apikey=${publicKey}&hash=72402047ce00fbd113138a43ff0c86ad`;

class App extends React.Component {
  state = {
    characters: null
  };
  handleDataFetch = () => {
    const characters = fetch(charactersURL, { method: "GET" })
      .then(response => response.json())
      .then(data => {
        this.setState({
          characters: data.data.results
        });
      });
  }

  render() {
    const preCharacters = this.state.characters;
    let characters;
    if (this.state.characters !== null) {

      characters = preCharacters.map(character => (
        <Character
          key={character.id}
          thumbnail={character.thumbnail}
          name={character.name}
          description={character.description}
        />
      ));
    }

    return (
      <div>
        <button onClick={this.handleDataFetch}>characters </button>
        {preCharacters ? characters : ''}
      </div>
    );
  }
}

export default App;
