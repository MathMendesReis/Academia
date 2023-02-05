import React from 'react'
import { GlobalContext } from './GlobalContext'

export const GlobalState = ({ children }) => {
    const data = {

    }
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  )
}
