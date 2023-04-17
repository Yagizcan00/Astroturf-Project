import React, { useContext, useEffect } from "react";

import ContentContext from "../../context/ContentContext";

import "../../style/Content/PageTactic/PageTactic.css"
import "../../style/Content/PageTactic/Tactics/Formations.css"

import Draggable from "react-draggable";


export default function PageTactic() {

    const { check, activeFormation, setActiveFormation, checkFormation, setCheckFormation, } = useContext(ContentContext)


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


    const formations = [
        "5-0-1",
        "4-0-2",
        "4-1-1",
        "3-0-3",
        "3-1-2",
        "3-2-1",
        "2-3-1",
        "2-2-2",
        "2-0-4",
        "1-2-3",
        "1-3-2",
        "1-1-4",
        "1-0-5",
    ]
    

    const formationClassname = ""
    const changeFormationClassname = () => {
        
    }


    const dropdownStyleActive = {
        display: "flex",
        flexDirection: "column",
    }
    const dropdownStyleInactive = {
        display: "none"
    }


    function handleFormationClick(formation) {
        setActiveFormation(formation);
    }


    return (
        <div className="pageTactic" style={check ? divStyleInactive : divStyleActive}>

            <div className="filterMenu">

                {/* Tactic selection part  */}
                <div className="listTactics">

                    <h1>Diziliş :</h1>

                    <div>
                        <button onClick={() => setCheckFormation(!checkFormation)}>{activeFormation}</button>

                        <div className="dropdown" style={checkFormation ? dropdownStyleActive : dropdownStyleInactive}>
                            {
                                formations.map((item) => (
                                    <p key={item} onClick={() => handleFormationClick(item) & setCheckFormation(!checkFormation)}>
                                        {item}
                                    </p>
                                ))
                            }
                        </div>
                    </div>

                </div>

                {/* Player number selection part */}
                <div>
                            
                </div>

            </div>

            <div className="tactic">

                {/* Players */}

                <Draggable>
                    <section className="playerOne3-2-1">
                        <h1>1</h1>
                    </section>
                </Draggable>

                <Draggable>
                    <section className="playerTwo3-2-1">
                        <h1>2</h1>
                    </section>
                </Draggable>

                <Draggable>
                    <section className="playerThree3-2-1">
                        <h1>3</h1>
                    </section>
                </Draggable>

                <Draggable>
                    <section className="playerFour3-2-1">
                        <h1>4</h1>
                    </section>
                </Draggable>

                <Draggable>
                    <section className="playerFive3-2-1">
                        <h1>5</h1>
                    </section>
                </Draggable>

                <Draggable>
                    <section className="playerSix3-2-1">
                        <h1>6</h1>
                    </section>
                </Draggable>

                <Draggable>
                    <section className="playerSeven3-2-1">
                        <h1>7</h1>
                    </section>
                </Draggable>

            </div>
        </div>
    )
}