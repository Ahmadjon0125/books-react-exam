import { useContext } from "react";
import { LangContext } from "../context/LangContext";


function useLang(){

    let {lang, setLang} = useContext(LangContext)

    return [lang, setLang]
}

export default useLang