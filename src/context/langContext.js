import React, {createContext, useState, useEffect} from 'react'

export const Context = createContext();

const supportedLangs = ['EN', 'ES', 'FR'];

let browserLang = navigator.language.split('-')[1];

browserLang = browserLang && supportedLangs.includes(browserLang) ? browserLang : 'EN';

const ContextProvider =  props => {

  const [lang, setLang] = useState(browserLang);

  const changeLanguage = (value) => {
    setLang(value);
  }

  return (
    <Context.Provider value={{lang, changeLanguage}}>
      {props.children}
    </Context.Provider>
  )

}

export default ContextProvider;
