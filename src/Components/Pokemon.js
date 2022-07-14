
import { Link, Outlet } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";
const Pokemon = ({ pokemon}) => {
    const { t } = useTranslation();
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
                                <small className="type">Type: {item.types[0].type.name}</small>
                                <Link to="/pokemons/:pokemonId" className="link">{t("btnWatch")}</Link>
                                {/* <button className="btnWatch">{t("btnWatch")}</button> */}
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