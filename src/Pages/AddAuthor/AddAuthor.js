import styled from 'styled-components'
import { useAuth } from '../../hooks/useAuth'
import axios from "axios"
import "./AddAuthor.scss"
import AuthLeftImg from "../../assets/images/avloniy.png"
import { NavLink } from 'react-router-dom'
import useLang from '../../hooks/useLang'
import ContentData from '../../assets/content'

export const AddAuthor = () => {
	let [lang] = useLang()
  const { token, setToken } = useAuth()
	console.log(token);

  const handleAuthForm = (evt) => {
    evt.preventDefault()

    const AddAuthFormData = new FormData()
    const {
      author_img,
      author_first_name,
      author_last_name,
      author_date_of_birth,
      date_of_death,
      author_genre,
      author_country,
      author_bio,
    } = evt.target.elements

		AddAuthFormData.append('image', author_img.files[0])
		AddAuthFormData.append('first_name', author_first_name.value)
		AddAuthFormData.append('last_name', author_last_name.value)
		AddAuthFormData.append('date_of_birth', author_date_of_birth.value)
		AddAuthFormData.append('date_of_death', date_of_death.value)
		AddAuthFormData.append('genre_id', author_genre.value)
		AddAuthFormData.append('country', author_country.value)
		AddAuthFormData.append('bio', author_bio.value)

		axios
			.post(`https://book-service-layer.herokuapp.com/author`, AddAuthFormData, {
				headers: {
					Authorization: token.token ,
				},
			})
			.then(res => setToken(res))
			.catch(err => console.log(err))

  }

  return (
    <Cccc className="addAuth">
      <div className="container">
        <AddAuthForm className="addAuth__form" onSubmit={handleAuthForm}>
          <div className="addAuth__left">
					<NavLink to="/" className="BackAuth">
					⇱Back
                  </NavLink>
						<img src={AuthLeftImg} alt="AuthLeftImg" />
						<AddAuthName className="addAuth__name">Ulug'bek xazinasi</AddAuthName>
            <label className='addAuth__label authlab'> Upload image
						<input type="file" name="author_img" className="addAuth__input authInput" />
						</label>
          </div>
          <AddAuthRight className="addAuth__right">
            <AddAuthTitle className="addAuth__title">{ContentData[lang].nav_muallif}</AddAuthTitle>
            <AddAuthInput
              type="text"
              name="author_first_name"
              placeholder={ContentData[lang].author_name}
              className="addAuth__input"
            />
            <AddAuthInput
              type="text"
              name="author_last_name"
              placeholder={ContentData[lang].author_last}
              className="addAuth__input"
            />
            <AddAuthInput
              type="number"
              name="author_date_of_birth"
              placeholder={ContentData[lang].author_birth}
              className="addAuth__input"
            />
            <AddAuthInput
              type="number"
              name="date_of_death"
              placeholder={ContentData[lang].author_death}
              className="addAuth__input"
            />
            <AddAuthSelect name="author_genre">
              <option disabled selected>Select genre</option>
              <option value="1">{ContentData[lang].temuriylar_davri}</option>
              <option value="2">{ContentData[lang].jadid_adabiyoti}</option>
              <option value="3">{ContentData[lang].sovet_davri}</option>
              <option value="4">{ContentData[lang].mustaqillik_davri}</option>
            </AddAuthSelect>
            <AddAuthInput
              type="text"
              name="author_country"
              placeholder={ContentData[lang].author_country}
              className="addAuth__input"
            />
            <AddAuthTextArea
              name="author_bio"
              placeholder={ContentData[lang].author_bio}
              className="addAuth__textarea"
            ></AddAuthTextArea>
            <AddAuthButton className="addAuth__button" type="submit">
						{ContentData[lang].author_create}
            </AddAuthButton>
          </AddAuthRight>
        </AddAuthForm>
      </div>
    </Cccc>
  )
}

const Cccc = styled.div`
position: absolute;
top: 0;
background-color: #fff;
width: 100vw;
`

const AddAuthForm = styled.form`
  display: flex;
  align-items: center;
  width: 576px;
`

const AddAuthName = styled.h2`
	margin-top: 22px;
	margin-bottom: 35px;
`

const AddAuthRight = styled.div`
  padding-top: 31px;
  padding-bottom: 101px;
  padding-left: 48px;
`
const AddAuthTitle = styled.h2`
  margin-bottom: 22px;
  font-weight: 900;
  font-size: 36px;
  line-height: 51px;
  color: #000000;
`

const AddAuthInput = styled.input`
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
  outline: none;
`
const AddAuthTextArea = styled.textarea`
  width: 330px;
  margin-bottom: 17px;
  padding-top: 30px;
  padding-left: 29px;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  outline: none;
  resize: none;
`

const AddAuthButton = styled.button`
  width: 328px;
  padding: 5px 20px;
  background: #152540;
  border-radius: 99px;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
  color: #ffffff;
`
const AddAuthSelect = styled.select`
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
	color: #000;

`

