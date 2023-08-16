import React, { useState, createContext } from 'react'

export const searchContext = createContext(null)

export const SearchContextProvider = (props) => {

    const [ productQuery, setProductQuery ] = useState(null)

    const searchProducts = (query) => {
        setProductQuery(()=> (query.toLowerCase()))
    }

    const contextValue = {productQuery, searchProducts}
    return (
        <searchContext.Provider value={contextValue}>{props.children}</searchContext.Provider>
    )
}
