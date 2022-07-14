import { useTranslation } from "react-i18next";

export function About(){
    const { t } = useTranslation();
    return(
        <div className="cardDad">
            <div className="cardDad2">
                {/* <div className="cardInfo">
                    <div className="infoImg">
                        <img  className="imgContainer" src="" alt="" />
                    </div>
                </div> */}
                <div className="cardInfo2">
                    <div className="info">
                        <p className="titleAbout">{t("personalInfo")}</p>
                    </div>
                    <div className="info2">
                        <p className="title2">Alumno: Susana Alba Nájera <br/>Matrícula: 190922 <br />
                        Carrera: IDGS <br />
                        Grado y grupo: 9-A <br />
                        Turno: Vespertino</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}