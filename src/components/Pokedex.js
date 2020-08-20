import React, { useState, useEffect } from 'react'
import { getAllPokemon, getPokemon } from './pokemon'
import Card from './Card/Card'

function Pokedex() {
    const [pokemonData, setPokemonData] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [preUrl, setPreUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialUrl);
            setNextUrl(response.next);
            setPreUrl(response.previous);
            await loadingPokemon(response.results);
            setLoading(false);
        }
        fetchData();
    }, []);

    const loadingPokemon = async data => {
        let _pokemonData = await Promise.all(
            data.map(async pokemon => {
                let pokemonRecord = await getPokemon(pokemon.url)
                return pokemonRecord;
            })
        );
        setPokemonData(_pokemonData);
    };
    console.log(pokemonData);
    return (
        <div className="pokedex">
            <div>{
                loading ? <h1>Loading... </h1> : (
                    <div className="container">
                        <div className="row">
                            {pokemonData.map((pokemon, i) => {
                                return <Card key={i} pokemon={pokemon} />
                            })}
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    )
}



export default Pokedex

