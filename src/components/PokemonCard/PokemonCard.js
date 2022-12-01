import {
  PokemonCardContainer,
  PokemonImage,
  PokemonName,
  PokemonList,
} from './PokemonCard.styled';

export const PokemonCard = ({ pokemon: { name, sprites, stats } }) => {
  return (
    <PokemonCardContainer>
      <PokemonImage
        src={sprites.other['official-artwork'].front_default}
        alt={name}
        width="250"
      />
      <PokemonName>{name} </PokemonName>
      <PokemonList>
        {stats.map(entry => (
          <li key={entry.stat.name}>
            {entry.stat.name} : {entry.base_stat}
          </li>
        ))}
      </PokemonList>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
