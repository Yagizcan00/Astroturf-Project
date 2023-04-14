import React, { createContext, useState } from "react";


const ContentContext = createContext()

export const ContentProvider = ({ children }) => {


    const [check, setCheck] = useState(true)


    const [activeFormation, setActiveFormation] = useState("3-2-1")


    const [checkFormation, setCheckFormation] = useState(false)


    const values = {
        check,
        setCheck,
        activeFormation,
        setActiveFormation,
        checkFormation, 
        setCheckFormation,
    }

    return <ContentContext.Provider value={values}> {children} </ContentContext.Provider>
}

export default ContentContext
