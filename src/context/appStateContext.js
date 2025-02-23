import { navigate } from "gatsby";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useWindowDimension } from "../hooks/useWindowDimension";

const AppStateContext = createContext()

export function AppStateProvider(props){
  const { height } = useWindowDimension()

  const [isIndex, setIsIndex] = useState(true)
  const [initialState, setInitialState] = useState(true)
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = (value) => {
    setOffsetY(value)    
  }

  useEffect(() => {
    setInitialState(isIndex && offsetY < 150)
  }, [isIndex, offsetY])

  // Navigate to Espacio on scroll
  useEffect(() => {    
    if(isIndex && offsetY > height * 0.33){
      navigate('/espacio')
    }
  }, [height, isIndex, offsetY])

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