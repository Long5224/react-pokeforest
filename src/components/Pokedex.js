import React, { useState, useEffect } from 'react'
import { getAllPokemon, getPokemon } from './pokemon'
import Card from './Card/Card'
import Filter from './FilterPokemon/Filter'

function Pokedex() {
    const [pokemonData, setPokemonData] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [preUrl, setPreUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon';
    const totalPokemonUrl = initialUrl + '?limit=893';
    const [totalPokemon, setTotalPokemon] = useState([]);
    const [showButtonLoadingMore, setShowButtonLoadingMore] = useState(true)

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialUrl);
            setNextUrl(response.next);
            setPreUrl(response.previous);
            let _pokemonData = await loadingPokemon(response.results);
            setPokemonData(_pokemonData);
            setLoading(false);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchTotalPokemonData() {
            let response = await getAllPokemon(totalPokemonUrl);
            const _totalPokemon = response.results;
            setTotalPokemon(_totalPokemon);
        }
        fetchTotalPokemonData();
    }, [])

    const loadingPokemon = async data => {
        let _pokemonData = await Promise.all(
            data.map(async pokemon => {
                let pokemonRecord = await getPokemon(pokemon.url)
                return pokemonRecord;
            })
        );
        return _pokemonData;
    };

    const handleShowMorePokemon = async () => {
        setLoadingMore(true);
        let response = await getAllPokemon(nextUrl);
        setNextUrl(response.next);
        setPreUrl(response.previous);
        let _pokemonData = await loadingPokemon(response.results);
        let arrayHoldingPokemon = [...pokemonData, ..._pokemonData];
        setPokemonData(arrayHoldingPokemon);
        setLoadingMore(false);
    }

    async function handleFilterPokemon(namePokemon) {
        const filterName = totalPokemon.filter(pokemon => {
            return pokemon.name.includes(namePokemon);
        });
        const _filterName = await loadingPokemon(filterName);
        setPokemonData(_filterName);
        setShowButtonLoadingMore(false);
    }

    return (
        <div className="pokedex">
            <div className="filter_pokemon container">
                <div className="row">
                    <Filter onSubmit={handleFilterPokemon} />
                </div>
            </div>
            <div className="body_pokedex">{
                loading ? <h1>Loading... </h1> : (
                    <div className="container">
                        <div className="row">
                            {pokemonData.map((pokemon, i) => {
                                return <Card key={i} pokemon={pokemon} />
                            })}
                        </div>
                        <div className="loadingMore">
                            {
                                loadingMore ? (<div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>) : showButtonLoadingMore ? (<div className="btn_loadingMore">
                                        <button type="button" className="btn btn-outline-primary" onClick={handleShowMorePokemon}>Loading more Pokemon</button>
                                    </div>) : ''
                                    
                            }
                        </div>

                    </div>
                )
            }
            </div>
        </div>
    )
}



export default Pokedex

