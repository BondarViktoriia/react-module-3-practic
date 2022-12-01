import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import { PokemonForm } from './PokemonForm/PokemonForm';
import PokemonInfo from './PokemonInfo';
// import { Reader } from "./Reader/Reader";
// import {VideoList} from "./VideoList/VideoList";
// import videos from '../videos.json';
// import { Player } from "./Player/Player";
// import publication from '../publication.json'

export class App extends Component {
  // state = {
  //    selectedVideo: null,
  // }

  //  selectVideo = link => {
  //   this.setState({ selectedVideo: link });
  // };

  // //////HTTP - request
  state = {
    pokemonName: '',
  };

  handleSearchFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <>
        {/* <h1>Selected video: {this.state.selectedVideo}</h1>
      <VideoList videos={videos} onSelect={this.selectVideo} />
      <Player url={this.state.selectedVideo} /> */}

        {/* <Reader items={publication} /> */}

        <PokemonForm onSearch={this.handleSearchFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />

      </>
    );
  }
}