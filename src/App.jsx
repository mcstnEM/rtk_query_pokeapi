import './App.css'
import { useGetPokemonByNameQuery } from './services/pokeapi'

function App() {

  const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu');

  console.log(data);

  return (
    <>
      {error ? 
        <p>Une erreur est survenu</p> :
          isLoading ? 
            <p>Chargement...</p> :
              data ? 
                <div>
                  <h3>{data.species.name}</h3>
                  <img src={data.sprites.front_default} alt={data.species.name} />
                </div> : null}
    </>
  )
}

export default App
