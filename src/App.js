import {Main} from "./Main/Main"
import { useAuth } from './hooks/useAuth'

import {Login} from './Pages/Login/Login'
import { Route, Routes } from "react-router-dom"
import { Enter } from "./Enter/Enter"



function App() {
  const { token } = useAuth()

  if (token) {
    return <Main/>
  } else
	return <>
		<Enter />

	</>
	
  
}

export default App
