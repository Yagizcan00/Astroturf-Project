import React, { createContext, useState } from "react";


const ContentContext = createContext()

export const ContentProvider = ({ children }) => {

    const [check, setCheck] = useState(true)

    const values = {
        check,
        setCheck,
    }

    return <ContentContext.Provider value={values}> {children} </ContentContext.Provider>
}

export default ContentContext
