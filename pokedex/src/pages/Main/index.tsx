import React, { useEffect, useState } from "react"
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
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
        const data = await response.json();
        setPokemon(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {        
        setSearch(e.target.value);
        console.log(e)
    }

    const fetchDataWithSearch = async () => {
        if (search.length > 0) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
            const data = await response.json();
            console.log(response)
            setPokemon(data);
        }
    }

    return (
        <Card>
            <div className="main">
                {(pokemon && pokemon?.sprites.front_default) &&
                    <img className="pokemon-img" width={150} height={150}
                        src={pokemon.sprites.front_default} alt={pokemon.name} />
                }
                <h3 className="pokemon-name">{pokemon?.name}</h3>

                <input className="input-search" type="search" placeholder="Enter a pokemon name" value={search} onChange={e => handleSearch(e)} onKeyDown={e => e.key === 'Enter' ? fetchDataWithSearch() : null}/>

                <div className="details">
                    <div className="type">Types</div>
                    <div className="details-container">
                        <ul className="type-list">
                            {pokemon?.types && pokemon.types.map((type: any, i: number) => (
                                <li key={i}>{type.type.name}</li>
                            ))}
                        </ul>
                        <button className="btn-search" onClick={() => fetchDataWithSearch()}>Search</button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Main