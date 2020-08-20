import React from 'react';
import './style.css';
import pokemonTypes from './pokemonTypes'
import { Link } from 'react-router-dom';


function Card({ pokemon }) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 Card">
            <div className="Card_img">
                <Link>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name + 'photo'} />
                </Link>
            </div>
            <div className="Card_name">
                <h5>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
            </div>
            <div className="Card_types">
                {pokemon.types.map((type, i) => {
                    return (
                        <div className="Card_type" key={i} style={{ backgroundColor: pokemonTypes[type.type.name] }}>
                            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                        </div>
                    );
                })}
            </div>
            <div className="Card_info">
                <span><strong>Ability: </strong>{pokemon.abilities[0].ability.name}</span>
            </div>

        </div>
    )
}


export default Card

