import { useEffect, useState } from "react"
import Card from "../../components/Card";
import './style.css'

const Main = () => {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [search, setSearch] = useState("");
    interface Pokemon {
        name: '',
        sprites: { front_default: string },
        types: any
    }

    const fetchData = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search ? search : "bulbasaur"}`);
        const data = await response.json();
        setPokemon(data);
        console.log(data.types[0].type)
        console.log(pokemon)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Card>
            <div className="main">
                <h3>{pokemon?.name}</h3>
                {pokemon?.sprites.front_default &&
                    <img width={200} height={200}
                        src={pokemon.sprites.front_default} alt={pokemon.name} />
                }
                <ul className="type-list">
                    {pokemon?.types && pokemon?.types.map((type: any, i: number) => (
                        <li key={i}>{type.type.name}</li>
                    ))}
                </ul>
            </div>
        </Card>
    )
}

export default Main