import React, { useContext, createRef } from "react";
import { useScreenshot, createFileName } from 'use-react-screenshot'

import ContentContext from "../../context/ContentContext";

import "../../style/Content/PageTactic/PageTactic.css"
import "../../style/Content/PageTactic/Tactics/Formations.css"

import Draggable from "react-draggable";


export default function PageTactic() {




    // States coming from Context file.
    const {
        check,
        activeFormation, setActiveFormation,
        checkFormation, setCheckFormation,
        colorOne, setColorOne,
        colorTwo, setColorTwo,
        checkColorOne, setCheckColorOne,
        checkColorTwo, setCheckColorTwo,
        backgroundColorOne, setBackgroundColorOne,
        backgroundColorTwo, setBackgroundColorTwo,
        textColorOne, setTextColorOne,
        textColorTwo, setTextColorTwo,
    } = useContext(ContentContext)




    // Active and Inactive div styles.
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
    // Active or Inactive situation of Dropdown Menu. 
    const dropdownStyleActive = {
        display: "flex",
        flexDirection: "column",
    }
    const dropdownStyleInactive = {
        display: "none"
    }




    // Formations array.
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
    // Function for change the active formation.
    function handleFormationClick(formation) {
        setActiveFormation(formation);
    }




    // Color array.
    const colors = [
        "Altın",
        "Beyaz",
        "Bordo",
        "Gri",
        "Kırmızı",
        "Mavi",
        "Mor",
        "Pembe",
        "Sarı",
        "Siyah",
        "Turuncu",
        "Yeşil",
    ]
    // Functions for change colors selected of user.
    function handleColorOneClick(colorOne) {
        setColorOne(colorOne);

        if (colorOne === "Beyaz") {

            setBackgroundColorOne("white")
            setTextColorOne("black")

        } else if (colorOne === "Gri") {

            setBackgroundColorOne("grey")
            setTextColorOne("white")

        } else if (colorOne === "Kırmızı") {

            setBackgroundColorOne("rgb(230, 0, 0)")
            setTextColorOne("white")

        } else if (colorOne === "Mavi") {

            setBackgroundColorOne("blue")
            setTextColorOne("white")

        } else if (colorOne === "Mor") {

            setBackgroundColorOne("purple")
            setTextColorOne("white")

        } else if (colorOne === "Pembe") {

            setBackgroundColorOne("#FF1493")
            setTextColorOne("white")

        } else if (colorOne === "Sarı") {

            setBackgroundColorOne("yellow")
            setTextColorOne("black")

        } else if (colorOne === "Siyah") {

            setBackgroundColorOne("black")
            setTextColorOne("white")

        } else if (colorOne === "Turuncu") {

            setBackgroundColorOne("#FF5F15")
            setTextColorOne("white")

        } else if (colorOne === "Yeşil") {

            setBackgroundColorOne("green")
            setTextColorOne("white")

        } else if (colorOne === "Bordo") {

            setBackgroundColorOne("rgb(160, 0, 0)")
            setTextColorOne("white")

        } else if (colorOne === "Altın") {

            setBackgroundColorOne("#AF8700")
            setTextColorOne("white")

        }
    }
    function handleColorTwoClick(colorTwo) {
        setColorTwo(colorTwo);

        if (colorTwo === "Beyaz") {

            setBackgroundColorTwo("white")
            setTextColorTwo("black")

        } else if (colorTwo === "Gri") {

            setBackgroundColorTwo("grey")
            setTextColorTwo("white")

        } else if (colorTwo === "Kırmızı") {

            setBackgroundColorTwo("rgb(230, 0, 0)")
            setTextColorTwo("white")

        } else if (colorTwo === "Mavi") {

            setBackgroundColorTwo("blue")
            setTextColorTwo("white")

        } else if (colorTwo === "Mor") {

            setBackgroundColorTwo("purple")
            setTextColorTwo("white")

        } else if (colorTwo === "Pembe") {

            setBackgroundColorTwo("#FF1493")
            setTextColorTwo("white")

        } else if (colorTwo === "Sarı") {

            setBackgroundColorTwo("yellow")
            setTextColorTwo("black")

        } else if (colorTwo === "Siyah") {

            setBackgroundColorTwo("black")
            setTextColorTwo("white")

        } else if (colorTwo === "Turuncu") {

            setBackgroundColorTwo("#FF5F15")
            setTextColorTwo("white")

        } else if (colorTwo === "Yeşil") {

            setBackgroundColorTwo("green")
            setTextColorTwo("white")

        } else if (colorTwo === "Bordo") {

            setBackgroundColorTwo("rgb(160, 0, 0)")
            setTextColorTwo("white")

        } else if (colorTwo === "Altın") {

            setBackgroundColorTwo("#AF8700")
            setTextColorTwo("white")

        }
    }




    const numberColor = (colorOne === "Siyah" || colorTwo === "Siyah") ? "rgb(80,80,80)" : "black"
    const downloadButtonColor = colorOne === "Siyah" ? "rgb(80,80,80)" : "white"



    // Download the div's screenshot part
    const ref = createRef(null);
    const [image, takeScreenShot] = useScreenshot({
        type: "image/jpeg",
        quality: 1.0
    });
    const download = (image, { name = "img", extension = "jpg" } = {}) => {
        const a = document.createElement("a");
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
    };
    const downloadScreenshot = () => takeScreenShot(ref.current).then(download);




    return (
        <div className="pageTactic" style={check ? divStyleInactive : divStyleActive}>

            <div className="filterMenu">

                {/* Tactic selection part  */}
                <div className="listTactics">

                    <h1>Diziliş:</h1>

                    <div>
                        <button onClick={() => setCheckFormation(!checkFormation)}>{activeFormation}</button>

                        <div className="dropdownTactics" style={checkFormation ? dropdownStyleActive : dropdownStyleInactive}>
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

                {/* Player color selection part */}
                <div className="listColors">

                    <h1>Renkler:</h1>

                    <div className="colorOne">
                        <button onClick={() => setCheckColorOne(!checkColorOne)} style={{ backgroundColor: backgroundColorOne, color: textColorOne }}>{colorOne}</button>

                        <div className="dropdownColorOne" style={checkColorOne ? dropdownStyleActive : dropdownStyleInactive}>
                            {
                                colors.map((item) => (
                                    <p key={item} style={{ backgroundColor: `${backgroundColorOne}`, color: `${textColorOne}` }} onClick={() => handleColorOneClick(item) & setCheckColorOne(!checkColorOne)}>
                                        {item}
                                    </p>
                                ))
                            }
                        </div>
                    </div>

                    <div className="colorTwo">
                        <button onClick={() => setCheckColorTwo(!checkColorTwo)} style={{ backgroundColor: backgroundColorTwo, color: textColorTwo }}>{colorTwo}</button>

                        <div className="dropdownColorTwo" style={checkColorTwo ? dropdownStyleActive : dropdownStyleInactive}>
                            {
                                colors.map((item) => (
                                    <p key={item} style={{ backgroundColor: `${backgroundColorTwo}`, color: `${textColorTwo}` }} onClick={() => handleColorTwoClick(item) & setCheckColorTwo(!checkColorTwo)}>
                                        {item}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>

            <div name="tactic screen part">
                <div className="tactic" ref={ref}>

                    {/* Players */}

                    <Draggable id="1">
                        <section className={"playerOne" + activeFormation} style={{ background: `linear-gradient(90deg, ${backgroundColorOne} 50%, ${backgroundColorTwo} 50%)`, color: numberColor }}>
                            <section>
                                <h1>1</h1>
                            </section>
                            <section>
                                <input type="text" placeholder="Oyuncu-1" />
                            </section>
                        </section>
                    </Draggable>

                    <Draggable id="2">
                        <section className={"playerTwo" + activeFormation} style={{ background: `linear-gradient(90deg, ${backgroundColorOne} 50%, ${backgroundColorTwo} 50%)`, color: numberColor }}>
                            <section>
                                <h1>2</h1>
                            </section>
                            <section>
                                <input type="text" placeholder="Oyuncu-2" />
                            </section>
                        </section>
                    </Draggable>

                    <Draggable id="3">
                        <section className={"playerThree" + activeFormation} style={{ background: `linear-gradient(90deg, ${backgroundColorOne} 50%, ${backgroundColorTwo} 50%)`, color: numberColor }}>
                            <section>
                                <h1>3</h1>
                            </section>
                            <section>
                                <input type="text" placeholder="Oyuncu-3" />
                            </section>
                        </section>
                    </Draggable>

                    <Draggable id="4">
                        <section className={"playerFour" + activeFormation} style={{ background: `linear-gradient(90deg, ${backgroundColorOne} 50%, ${backgroundColorTwo} 50%)`, color: numberColor }}>
                            <section>
                                <h1>4</h1>
                            </section>
                            <section>
                                <input type="text" placeholder="Oyuncu-4" />
                            </section>
                        </section>
                    </Draggable>

                    <Draggable id="5">
                        <section className={"playerFive" + activeFormation} style={{ background: `linear-gradient(90deg, ${backgroundColorOne} 50%, ${backgroundColorTwo} 50%)`, color: numberColor }}>
                            <section>
                                <h1>5</h1>
                            </section>
                            <section>
                                <input type="text" placeholder="Oyuncu-5" />
                            </section>
                        </section>
                    </Draggable>

                    <Draggable id="6">
                        <section className={"playerSix" + activeFormation} style={{ background: `linear-gradient(90deg, ${backgroundColorOne} 50%, ${backgroundColorTwo} 50%)`, color: numberColor }}>
                            <section>
                                <h1>6</h1>
                            </section>
                            <section>
                                <input type="text" placeholder="Oyuncu-6" />
                            </section>
                        </section>
                    </Draggable>

                    <Draggable id="7">
                        <section className={"playerSeven" + activeFormation} style={{ background: `linear-gradient(90deg, ${backgroundColorOne} 50%, ${backgroundColorTwo} 50%)`, color: numberColor }}>
                            <section>
                                <h1>7</h1>
                            </section>
                            <section>
                                <input type="text" placeholder="Oyuncu-7" />
                            </section>
                        </section>
                    </Draggable>

                </div>

                <div className="downloadButton">
                    <button style={{ backgroundColor: backgroundColorOne, color: downloadButtonColor }} onClick={downloadScreenshot}>Taktiği indir</button>
                </div>
            </div>

        </div>
    )
}
