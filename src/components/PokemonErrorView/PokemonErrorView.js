import errorImage from '../../img/1587631238_1.jpg'

export const  PokemonErrorView =({ message })=> {
    return (
        <div>
            <img src={errorImage} alt='error' width='250' />
            <p>{message}</p>
        </div>
    )
}

export default PokemonErrorView;