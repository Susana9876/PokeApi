
import React from "react";
const Pokemon = ({ pokemon}) => {
    return (
        <>
        {
                pokemon.map((item) => {
                    return (
                        <>
                            <div className="card">
                                <div className="number"><small>#0{item.id}</small></div>
                                <img src={item.sprites.front_default} alt="" />
                                <div className="detail-wrapper">
                                <h3>{item.name}</h3>
                                </div>
                            </div>
                        </>
                    )
                })
        }

        </>
    )
}
export default Pokemon;