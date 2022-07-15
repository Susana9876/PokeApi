import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/contextGlobal";
import axios from "axios";
import swal from "sweetalert";
export function PokemonId() {
  const { name } = useContext(GlobalContext);
//   const { id } = useContext(GlobalContext);
  const [pokemon, setPokemon] = useState([{}]);
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => {
      setPokemon(res.data);
    })
    .catch(err=>{
      swal.fire(
        'Good job!',
        'Este pokemon no existe',
        'error'
      )
    });
    // axios
    // .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    // .then((res) => {
    //   setPokemon(res.data);
    // })
    // .catch(err=>{
    //   swal.fire(
    //     'Good job!',
    //     'Este pokemon no existe',
    //     'error'
    //   )
    // });
  return (
    <div className="card">
        {/* <div className="number"><small>{(pokemon.id)}</small></div> */}
            {/* <img src={item.sprites.front_default} alt="" /> */}
            <div className="detail-wrapper">
            <h3>{(pokemon.name)}</h3>
            {/* <small className="type">Type: {item.types[0].type.name}</small> */}
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

