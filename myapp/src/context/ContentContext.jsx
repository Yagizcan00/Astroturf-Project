import React, { createContext, useState } from "react";


const ContentContext = createContext()

export const ContentProvider = ({ children }) => {


    const [check, setCheck] = useState(true)


    const [activeFormation, setActiveFormation] = useState("3-2-1")


    const [checkFormation, setCheckFormation] = useState(false)


    const [colorOne, setColorOne] = useState("Kırmızı")


    const [colorTwo, setColorTwo] = useState("Beyaz")


    const [checkColorOne, setCheckColorOne] = useState(false)


    const [checkColorTwo, setCheckColorTwo] = useState(false)

    const [backgroundColorOne, setBackgroundColorOne] = useState("rgb(200, 0, 0)")
    const [backgroundColorTwo, setBackgroundColorTwo] = useState("White")
    const [textColorOne, setTextColorOne] = useState("white")
    const [textColorTwo, setTextColorTwo] = useState("black")

    const values = {
        check,
        setCheck,
        activeFormation,
        setActiveFormation,
        checkFormation,
        setCheckFormation,
        colorOne,
        setColorOne,
        colorTwo,
        setColorTwo,
        checkColorOne,
        setCheckColorOne,
        checkColorTwo,
        setCheckColorTwo,
        backgroundColorOne,
        setBackgroundColorOne,
        backgroundColorTwo,
        setBackgroundColorTwo,
        textColorOne,
        setTextColorOne,
        textColorTwo,
        setTextColorTwo,
    }

    return <ContentContext.Provider value={values}> {children} </ContentContext.Provider>
}

export default ContentContext
