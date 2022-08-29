import { Route, Routes } from 'react-router-dom'
import {Login} from '../Pages/Login/Login'
import {Registration} from '../Pages/Registration/Registration'
export function Enter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}/>
     	
        <Route path="/registration" element={<Registration />}/>
      
     </Routes> 
    </>
  )
}


