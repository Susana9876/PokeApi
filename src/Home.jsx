import { Link, Outlet } from "react-router-dom";
import Search  from './Components/Search';
import { useTranslation } from "react-i18next";

export function Home(){
    const { t } = useTranslation();
    return(
        <main>
            <div className="navDad">
            <nav className="navbarTop">
                <div className="nav">
                <Link to="/">{t("nav1")}</Link>
                </div>
                <div className="nav">
                <Link to="/pokemons">{t("nav2")}</Link>
                </div>
                <div className="nav">
                <Link to="/pokemons/:pokemonId">Pokemon Id</Link>
                </div>
                <div className="nav">
                <Link to="/190922">{t("nav3")}</Link>
                </div>
                <div className="nav">
                    <Search/>
                </div>
            </nav>
            </div>
            <section>
                <Outlet/>
            </section>
        </main>
    );
}