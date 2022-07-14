import logoPoke from '../img/logoPoke.png'
import { useTranslation } from "react-i18next";
export function Nav(){
    const { i18n, t } = useTranslation();

    function changeLanguage(language){
        i18n.changeLanguage(language);
    }
    return(
        <div className="back">
            <h1>{t("nav1")}</h1>
            <button
              onClick={() => {
                changeLanguage("en");
              }}
            >
              en
            </button>
            <button
              onClick={() => {
                changeLanguage("es");
              }}
            >
              es
            </button>
            {/* <div className="link-container">
                <p
                className={`App-link ${
                    i18n.language === "es" ? "selected" : "unselected"
                }`}
                onClick={() => changeLanguage("es")}
                >
                <button>MX</button>
                </p>
                <p
                className={`App-link ${
                    i18n.language === "en" ? "selected" : "unselected"
                }`}
                onClick={() => changeLanguage("en")}
                >
                <button>US</button>
                </p>
            </div> */}
            <img className='imgHome' src={logoPoke} alt="" />
        </div>
    )
}
