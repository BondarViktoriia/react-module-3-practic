import styled from 'styled-components';

export const FormPokemon = styled.form`
  justify-content: center;
  display: flex;
  gap: 15px;
`;
export const PokemonInput = styled.input`
  width: 250px;
  height: 25px;
  padding: 5px;
`;

export const PokemonSearchButton = styled.button`
  width: 100px;
  height: 25px;

  background-color: #a12c7e;
  color: #ffffff;
  transform: translateY(7px);

  svg {
    text-align: center;
    transform: translateY(3px);
  }
`;

export const PokemonInputText = styled.span`
  padding: 10px;
`;
