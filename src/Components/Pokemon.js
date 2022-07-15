
import { Link, Outlet } from "react-router-dom";
import React, {useContext, useState} from "react";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../context/contextGlobal";
// import { GlobalContext } from "";
const Pokemon = ({pokemon}) => {
    const [NameNum] = useState('');
    const { t } = useTranslation();
    const { handleCount } = useContext(GlobalContext);
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
                                {/* <Link to="/pokemons/:pokemonId" onClick={() => {
                                    handleCount(item.data.id.toString());
                                    }} className="link">{t("btnWatch")}</Link> */}
                                <Link
                                    to="/pokemons/:pokemonId"
                                    onClick={() => {
                                    handleCount(NameNum.toString());
                                }}
                                >
                                    {t("btnSearch")}
                                </Link>
                                
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