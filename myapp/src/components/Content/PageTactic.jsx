import { useContext } from "react";

import ContentContext from "../../context/ContentContext";

import "../../style/Content/PageTactic.css"


export default function PageTactic() {

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
        <div className="pageTactic" style={check ? divStyleInactive : divStyleActive}>
            <h1>* Taktik ve Dizilişin Yapıldığı Bölüm *</h1>
        </div>
    )
}