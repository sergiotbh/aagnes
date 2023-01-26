import React, { createContext, useContext, useEffect, useState } from "react";

const AppStateContext = createContext()

export function AppStateProvider(props){

  const [isIndex, setIsIndex] = useState(true)
  const [initialState, setInitialState] = useState(true)
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = (value) => {
    setOffsetY(value)
  }

  useEffect(() => {
    setInitialState(isIndex && offsetY < 150)
  }, [isIndex, offsetY])

  useEffect(() => {
    if(props.location?.pathname === '/'){
      setIsIndex(true)
      setInitialState(true)
    }else{
      setIsIndex(false)
      setInitialState(false)
    }
  }, [props.location])

  const value = {
    initialState,
    handleScroll,
    isIndex
  }

  return <AppStateContext.Provider value={value} {...props }/>
}

export function useAppState(){
  const context = useContext(AppStateContext)
  if(!context){
    throw new Error('Context should be called inside of Provider')
  }
  return context
}