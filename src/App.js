import React from "react";
import "./App.css";
const charactersURL =
  "https://gateway.marvel.com/v1/public/events/29/characters?apikey=7fdc3b3b1bb5e7cf21e75d9f18527565";

class App extends React.Component {
  state = {};
  componentDidMount() {
    fetch(charactersURL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }
  render() {
    return (
      <div className="app">
        <h1>Kupa na bahamach</h1>
      </div>
    );
  }
}

export default App;
