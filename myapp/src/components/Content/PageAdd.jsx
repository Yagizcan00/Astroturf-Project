import { useContext } from "react";

import ContentContext from "../../context/ContentContext";

import "../../style/Content/PageAdd.css"


export default function PageAdd() {

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
        <div className="pageAdd" style={check ? divStyleInactive : divStyleActive}>
            <h1>* Oyuncu Ekleme Bölümü *</h1>
            <h1>* Üzerinde Çalışılıyor *</h1>
        </div>
    )
}