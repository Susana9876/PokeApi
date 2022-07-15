import React, { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { searchPokemon } from "../api";
import { GlobalContext } from "../context/contextGlobal";
import { useTranslation } from "react-i18next";
// const {useState, useContext} = React;

const Search = () => {
    const { t } = useTranslation();
    const { handleCount } = useContext(GlobalContext);
    const [NameNum, SetNameNum] = useState('');
    
    // searching, setSearch, 
    // const [pokemon, setPokemon] = useState();
    // const onChange = (e) =>{
    //     setSearch(e.target.value);
    // }
    // const onClick = async (e) =>{
    //     const data = await searchPokemon(searching);
    //     setPokemon(data);
    //     console.log(data);
    // };
    return (
        <nav className="navbar">
            <div>
                <input
                    className="input"
                    type="search"
                    placeholder={t("placeholder")}
                    pattern="[A-Za-z ]"
                    onChange={(event) => {
                    SetNameNum(event.target.value);
                    }}
                    />

            </div>
            <div>
            <Link
                to="/pokemons/:pokemonId"
                onClick={() => {
                  handleCount(NameNum.toString());
                }}
              >
                {t("btnSearch")}
            </Link>
                {/* <button className="search-boton" onClick={onClick}>{t("btnSearch")}</button> */}
            </div>
            {/* <div className="content">
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
            </div> */}
        </nav>
    );
};

export default Search;