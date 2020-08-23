import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

function Filter(props) {
    const { onSubmit } = props;
    const [searchPokemon, setSearchPokemon] = useState('');
    const typingTimeoutRef = useRef(null);

    async function onChange(event) {
        let target = event.target;
        let value = target.value;
        setSearchPokemon(value)
    }

    function handleSearchPokemon() {
        onSubmit(searchPokemon);

    }


    return (
        <form>
            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                <div className="input-group">
                    <input type="text" className="form-control border-0 bg-light" name="namePokemon" onChange={onChange} />
                    <div className="input-group-append">
                        <button id="button-addon1" type="button" className="btn btn-link text-primary" onClick={handleSearchPokemon} onSubmit={handleSearchPokemon}><i className="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
        </form>
    );
}

Filter.propTypes = {
    onSubmit: PropTypes.func,
}

Filter.defaultProps = {
    onSubmit: null,
}

export default Filter; 

