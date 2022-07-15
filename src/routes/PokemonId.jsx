import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/contextGlobal";
import axios from "axios";
import swal from "sweetalert";
export function PokemonId() {
  const { object } = useContext(GlobalContext);
//   const { id } = useContext(GlobalContext);
  const [pokemon, setPokemon] = useState([{}]);
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${object}`)
    .then((res) => {
      setPokemon(res.data)
    })
    .catch(err=>{
      swal.fire(
        'Good job!',
        'Este pokemon no existe',
        'error'
      )
    });
  return (
    <div className="app-container">
            {/* <h1 className='title'>{t("titlePokemon")}</h1> */}
                <div className="pokemon-container">
                  <div className="all-container">
                    <div className="card">
                        <div className="number"><small>#{(pokemon.id)}</small></div>
                            {/* <img className="img" src={(pokemon.data.sprites.front_default)} alt="" /> */}
                            <div className="detail-wrapper">
                            <h3>{(pokemon.name)}</h3>
                            <div className="details">
                            <p>Height: {(pokemon.height)}</p>
                            <p>Weight: {(pokemon.weight)}</p>
                            </div>
                            {/* <small className="type">Type: {pokemon.types[0].type.name}</small> */}
                        </div>
                    </div>          
                  </div>
                </div>
            </div>
  );
}

// <div><Home/>
//   <div className="card">
//     <div className="number"><small>#0{pokemon.id}</small></div>
//     <img src={pokemon.sprites.front_default} alt="" />
//     <div className="detail-wrapper">
//         <h3>{pokemon.name}</h3>
//         <small className="type">Type: {pokemon.types[0].type.name}</small>
//         {/* <button className="btnWatch">{t("btnWatch")}</button> */}
//     </div>
// </div>
// </div>
// export default PokemonId;

