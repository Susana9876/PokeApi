import React from "react";
import { searchPokemon } from "../api";
const {useState} = React;

const Search = () => {
    const [searching, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();
    const onChange = (e) =>{
        setSearch(e.target.value);
    }
    const onClick = async (e) =>{
        const data = await searchPokemon(searching);
        setPokemon(data);
        console.log(data);
    };
    return (
        <nav className="navbar">
            <div>
                <input
                    className="input"
                    placeholder="Buscar pokemon"
                    onChange={onChange}
                    />
            </div>
            <div>
                <button className="search-boton" onClick={onClick}>Buscar</button>
            </div>
            <div className="content">
                {pokemon && 
                <div className="card">
                <div className="number"><small>{pokemon.id}</small></div>
                    <img src={pokemon.sprites.front_default} alt="" />
                    <div className="detail-wrapper">
                    <h3>{pokemon.name}</h3>
                    <small className="type">Type: {pokemon.types[0].type.name}</small>
                </div>
            </div>
                }
            </div>
        </nav>
    );
};

export default Search;