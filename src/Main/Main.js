import { Outlet, Route, Routes } from 'react-router-dom'
import { Security } from '../Pages/MyAccount/Security/Security'
import { AddAuthor } from '../Pages/AddAuthor/AddAuthor'
import { AddBook } from '../Pages/AddBook/AddBook'
import { MyAccount } from '../Pages/MyAccount/MyAccount'
import {Account} from "../Pages/MyAccount/Account/Account"
import {AuthorId} from "../Pages/IdPages/AuthorId"
import {BookId} from "../Pages/IdPages/BookId"
import { Private } from '../Private'
import { MakePayment } from '../Pages/MyAccount/MakePayment/MakePayment'
import { useEffect, useState } from 'react'
import axios from 'axios'

export function Main() {
	const [idData, setidData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/author/genreId/1`)
      .then((res) => setidData(res.data))
      .catch((err) => console.log(err));
  }, []);
	
  return (
    <div >
      <Private  />
      <Routes>
				<Route path={`/genrel/:id`} element={<AuthorId /> } />
				<Route path={`/book/:id`} element={<BookId /> } />
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/addAuthor" element={<AddAuthor />} />
				<Route path='/myAccount' element={< MyAccount/>} >
				<Route path='account' element={<Account/>} />
					<Route path='security' element={<Security /> } />
					<Route path='makePayement' element={<MakePayment />}  />
				</Route>
				
      </Routes>
    </div>
  )
}
