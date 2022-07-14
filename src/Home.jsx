import { Link, Outlet } from "react-router-dom";
import Search  from './Components/Search';
import { useTranslation } from "react-i18next";

export function Home(){
    const { i18n,t } = useTranslation();
    function changeLanguage(language){
        i18n.changeLanguage(language);
    }
    return(
        <main>
            <div className="navDad">
            <nav className="navbarTop">
                <div className="nav">
                    <div className="btnDad">
                        <button
                        className="btnEn"
                        onClick={() => {
                            changeLanguage("en");
                        }}
                        >
                        en
                        </button>
                        <button
                        className="btnEs"
                        onClick={() => {
                            changeLanguage("es");
                        }}
                        >
                        es
                        </button>
                    </div>
                </div>
                <div className="nav">
                <Link to="/">{t("nav1")}</Link>
                </div>
                <div className="nav">
                <Link to="/pokemons">{t("nav2")}</Link>
                </div>
                {/* <div className="nav">
                <Link to="/pokemons/:pokemonId">Pokemon Id</Link>
                </div> */}
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