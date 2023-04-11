import { useContext } from "react";

import ContentContext from "../../context/ContentContext";

import "../../style/Content/PageInformation.css"


export default function PageInformation() {

    const { check } = useContext(ContentContext)


    const divStyleActive = {
        marginLeft: "20vw",
        transition: "all 0.75s ease",

        width: "80VW",
    }

    const divStyleInactive = {
        marginLeft: "12vw",
        transition: "all 0.75s ease",

        width: "88vw",
    }

    return (
        <div className="pageInformation" style={check ? divStyleInactive : divStyleActive}>
            <h1>* Oyuncuların Listesinin ve Oyuncu Bilgilerinin Bulunduğu Bölüm *</h1>
        </div>
    )
}