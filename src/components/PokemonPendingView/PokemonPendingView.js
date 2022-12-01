import PokemonCard from 'components/PokemonCard';
import PropTypes from 'prop-types';
import { ImSpinner3 } from 'react-icons/im';
import pendingImage from '../../img/1581672938_2.jpg';
import { PendingContainer, Spinner } from './PokimonPendingView.styled';

export const PokemonPendingView = ({ pokemonName }) => {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <PendingContainer>
      <Spinner>
        <ImSpinner3 size="32" />
        Loading.....
      </Spinner>
      <PokemonCard pokemon={pokemon} />
    </PendingContainer>
  );
};

PokemonPendingView.propTypes = {
  pokemonName: PropTypes.string,
};

export default PokemonPendingView;
