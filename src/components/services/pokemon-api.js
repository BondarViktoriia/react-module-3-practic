

export const FetchPokemon = (name) => {
    return   fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
          .then(res => {
              if (res.ok) {
                  return res.json();
              }
              return Promise.reject(new Error(`Покемона с именем ${name} не найдено`))
        })
}

export default FetchPokemon;