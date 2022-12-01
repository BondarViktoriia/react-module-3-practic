import PokemonCard from "components/PokemonCard";
import { ImSpinner3 } from "react-icons/im";
import pendingImage from '../../img/1581672938_2.jpg'


export const PokemonPendingView = ({ pokemonName }) => {
    const pokemon = {
        name: pokemonName,
        sprites: {
            other: {
                'official-artwork': {
                    front_default:pendingImage
                }
            }
        },
        stats:[],
     }

    return (
        <div>
              <div>
            <ImSpinner3 size='32' />
            Loading.....
            </div>
            <PokemonCard pokemon={pokemon} />
      </div>
    )
}
 
export default PokemonPendingView;