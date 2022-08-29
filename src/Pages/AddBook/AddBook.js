import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../../hooks/useAuth'
import axios from "axios"
import { NavLink, Route, Routes } from 'react-router-dom'
import AddBookImage from "../../assets/images/addBookImg.png"
import "./AddBook.scss"
import useLang from '../../hooks/useLang'
import ContentData from '../../assets/content'

export const AddBook = () => {
	let [lang] = useLang()
	const {token, setToken} = useAuth()
	const [addBookId, setAddBookId] = useState(1)
	const [data, setData] = useState([])
	const [name, setName] = useState('')

	

	const addBookSelectVal = (evt) =>{
		setAddBookId(evt.target.value)
	}

	const func = (evt)=>{
		console.log(evt.target.value)
	}

		useEffect(()=>{
			axios
				.get(`https://book-service-layer.herokuapp.com/author/genreId/${addBookId}`,
				{
          headers: {
            Authorization: token.token,
          },
        }
				)
				.then(res => setName(res.data))
				.catch(err=> console.log(err))
		},[addBookId])



		const handleBookForm =(evt)=>{
			evt.preventDefault()

		const addBookFormData = new FormData();
    const {
      image,
      title,
      page,
      year,
      price,
      genre_id,
      author_id,
      description,
    } = evt.target.elements;

		addBookFormData.append("image", image.files[0]);
    addBookFormData.append("title", title.value);
    addBookFormData.append("page", page.value);
    addBookFormData.append("year", year.value);
    addBookFormData.append("price", price.value);
    addBookFormData.append("genre_id", genre_id.value);
    addBookFormData.append("author_id", author_id.value);
    addBookFormData.append("description", description.value);

		axios
			.post(`https://book-service-layer.herokuapp.com/book`, addBookFormData, {
				headers: {
          Authorization: token.token,
        },
			})
			.then(res => console.log(res))
			.catch(err=> console.log(err))

		}

	

  return (
    <Aaaa className="addBook">
      <div className="container">
        <AddBookForm className="addBook__form" onSubmit={handleBookForm}>
          <AddBookLeft className="addBook__left">
					<NavLink to="/" className="BackAuth">
					⇱Back
                  </NavLink>
						<img src={AddBookImage} alt="AuthLeftImg" />
						<AddBookName className="addAuth__name">Ulug'bek xazinasi</AddBookName>
            <label className='addAuth__label authlab'> Upload image
            <input type="file" name='image'className="addAuth__input bookInput" />
						</label>
          </AddBookLeft>
          <AddBookRight className="addBook__right">
            <AddBookTitle className="addBook__title">{ContentData[lang].book_book}</AddBookTitle>
            <AddBookInput name='title'
              type="text"
              className="addBook__input"
              placeholder={ContentData[lang].book_title}
            />
            <AddBookInput name='page'
              type="text"
              className="addBook__input"
              placeholder={ContentData[lang].book_pages}
            />
            <AddBookInput name='year'
              type="text"
              className="addBook__input"
              placeholder={ContentData[lang].book_year}
            />
            <AddBookInput name='price'
              type="text"
              className="addBook__input"
              placeholder={ContentData[lang].book_title}
            />
            <AddBookGenre name="genre_id" onClick={addBookSelectVal}>
              <option disabled selected value="0">
							{ContentData[lang].book_country}
              </option>
              <option value="1">{ContentData[lang].temuriylar_davri} </option>
              <option value="2">{ContentData[lang].jadid_adabiyoti} </option>
              <option value="3">{ContentData[lang].sovet_davri} </option>
              <option value="4">{ContentData[lang].mustaqillik_davri}</option>
            </AddBookGenre>
						<AddBookId name="author_id" onChange={func}>
							<option selected disabled value="0">{ContentData[lang].book_author}</option>
              {name.length &&
                (name.map((e) => <option value={e.id}>{e.first_name}</option>))}
            </AddBookId>
            <AddBookTextArea
              name="description"
              placeholder={ContentData[lang].book_description}
            ></AddBookTextArea>
            <AddBookButton>{ContentData[lang].book_create}</AddBookButton>
          </AddBookRight>
        </AddBookForm>
      </div>
    </Aaaa>
  )
}
const Aaaa = styled.div`
position: absolute;
top: 0;
background-color: #fff;
width: 100vw;
`

const AddBookForm = styled.form`
  display: flex;
	align-items: center;
`

const AddBookName = styled.h2`
	margin-top: 22px;
	margin-bottom: 35px;
`

const AddBookLeft = styled.div`
  width: 576px;
  padding: 63px 124px 44px;
`

const AddBookRight = styled.div`
  width: 576px;
  padding: 31px 138px 67px 108px;
`
const AddBookTitle = styled.h2`
  margin-bottom: 22px;
  font-weight: 900;
  font-size: 36px;
  line-height: 51px;
  color: #000000;
`

const AddBookInput = styled.input`
  width: 330px;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  margin-bottom: 16px;
  padding-top: 16px;
  padding-bottom: 10px;
  padding-left: 29px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  outline: none;
`

const AddBookTextArea = styled.textarea`
  width: 330px;
  margin-bottom: 17px;
  padding-top: 30px;
  padding-left: 29px;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  outline: none;
  resize: none;
`
const AddBookButton = styled.button`
  width: 328px;
  padding: 5px 20px;
  background: #152540;
  border-radius: 99px;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
  color: #ffffff;
`
const AddBookGenre = styled.select`
	appearance: none; 
	margin-bottom: 17px;
  padding-top: 10px;
	padding-bottom: 10px;
  padding-left: 29px;
  border: none;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
	outline: none;
	border: 1px solid #b4b4bb;
  border-radius: 10px;
	color: #000000;
`

const AddBookId = styled.select`
	appearance: none; 
	margin-bottom: 17px;
  padding-top: 10px;
	padding-bottom: 10px;
  padding-left: 29px;
  border: none;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
	outline: none;
	border: 1px solid #b4b4bb;
  border-radius: 10px;
	color: #000000;
`
