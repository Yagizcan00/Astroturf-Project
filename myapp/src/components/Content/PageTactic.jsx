import { useContext } from "react";

import ContentContext from "../../context/ContentContext";

import "../../style/Content/PageTactic/PageTactic.css"

import Draggable, { DraggableCore } from "react-draggable";


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


    const Draggable = require('react-draggable');
    const DraggableCore = Draggable.DraggableCore;



    return (
        <div className="pageTactic" style={check ? divStyleInactive : divStyleActive}>

            <div className="filterMenu">

            </div>

            <div className="tactic">
                <Draggable>
                    <div className="playerOne">
                        <h1>1</h1>
                    </div>
                </Draggable>
            </div>
        </div>
    )
}