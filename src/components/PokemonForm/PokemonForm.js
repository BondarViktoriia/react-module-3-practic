import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import {
  FormPokemon,
  PokemonInput,
  PokemonSearchButton,
  PokemonInputText,
} from './PokemonForm.styled';

export class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  static propTypes = {
    pokemonName: PropTypes.string,
  };

  handleNameChange = e => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      alert('Введите имя Покемона');
      return;
    }
    this.props.onSearch(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    const { pokemonName } = this.state;
    return (
      <FormPokemon onSubmit={this.handleSubmit}>
        <PokemonInput
          type="text"
          name="pokemonName"
          value={pokemonName}
          onChange={this.handleNameChange}
        />
        <PokemonSearchButton type="submit">
          <BsSearch />
          <PokemonInputText>Search</PokemonInputText>
        </PokemonSearchButton>
      </FormPokemon>
    );
  }
}
