
import PokemonErrorView from 'components/PokemonErrorView';
import PokemonCard from 'components/PokemonCard';
import { Component } from 'react';
import PokemonPendingView from 'components/PokemonPendingView';
import {FetchPokemon} from '../services/pokemon-api'
import { InputPokemonName } from './PokemonInfo.styled'


export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
      error: null,
      status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
    //   console.log('Изменилось имя покемона');
    //   console.log(prevProps.pokemonName);
    //   console.log(this.props.pokemonName);
      this.setState({ status: 'pending' });
   
FetchPokemon(nextName)
          .then(pokemon => this.setState({ pokemon, status:'resolved' }))
            .catch(error => this.setState({ error, status: 'rejected' }))
        
        
        // .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { pokemon,error,status } = this.state;
    const { pokemonName } = this.props;
      

      if (status === 'idle') {
          return  <InputPokemonName>Введите имя Покемона</InputPokemonName>
      }

      if (status === 'pending') {
          return <PokemonPendingView pockemonName={pokemonName} />
      }

      if (status === 'rejected') {
          return <PokemonErrorView message={error.message} />
      }

      if (status === 'resolved') {
          return  <PokemonCard pokemon={pokemon}/>
      }
   
  }
}


//  return (
//       <div>
//         {loading && <div>Загружаем...</div>}
//             {!pokemonName && <div>Введите имя Покемона</div>}
            

//             {pokemon && <div>
//                 <p>{pokemon.name}</p>
//                 <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} width='250' />
//             </div>}
//         {error && <h1>{error.message} </h1>}
//       </div>
//     );