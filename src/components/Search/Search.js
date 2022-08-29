import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import searchImg from '../../assets/images/searchImg.png'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import "./search.scss"
import { ThemeContext } from '../../context/ThemeContext'
import useLang from '../../hooks/useLang'
import ContentData from '../../assets/content'

export const Search = () => {
  let [lang] = useLang()
  const [data, setData] = useState({});
  

  function handleSearchAuth(evt) {
    evt.preventDefault();

    const { inputAuth } = evt.target.elements;

    axios
      .get(
        `https://book-service-layer.herokuapp.com/author/search?author=${inputAuth.value}`
      )
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div>
        <SearchAuthBox>
          <SearchBox>
            <SearchBoxTitle> {ContentData[lang].qidirish__qidirish}</SearchBoxTitle>
            <form onSubmit={handleSearchAuth} className="d-flex">
              <SearchBoxInput
                name="inputAuth"
                type="text"
                placeholder={ContentData[lang].qidirish_input}
              />
              <SearchBoxButton type="submit">
                <img src={searchImg} alt="" width={24} height={24} />
                {ContentData[lang].qidirish_izlash}
              </SearchBoxButton>
            </form>
          </SearchBox>
        </SearchAuthBox>
        <BoxSearchList>
          {data.length &&
            data.map((e) => (
              <SearchAuthItem>
                <div>
                  <img
                    className="mx-5"
                    src={`https://book-service-layer.herokuapp.com/${e.image}`}
                    width={200}
                    height={250}
                    alt=""
                  />
                </div>
                <div className="mx-5">
                  <h2>{e.first_name}</h2>
                  <h2>{e.last_name}</h2>
                  <div>
                    <strong>{e.date_of_birth}</strong>
                    <strong>{e.date_of_death}</strong>
                  </div>
                   <p>{e.bio}</p>
                </div>
              </SearchAuthItem>
            ))}
        </BoxSearchList>
      </div>
    </>
  );
};

const SearchAuthBox = styled.div`
  width: 100vh !important;
  position: absolute;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 1060px;
  margin-top: -214px;
  margin-left: 90px;
  padding-top: 40px;
  padding-bottom: 36px;
  background-color: #191919;
  box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

const SearchBoxTitle = styled.h2`
  margin-bottom: 13px;
  font-weight: 400;
  font-size: 31px;
  line-height: 34px;
  color: #c9ac8c;
`;

const SearchBoxInput = styled.input`
  width: 710px;
  padding-left: 15px !important ;
  padding-right: 15px !important;
  padding-left: 27px !important ;
  border: none;
  background: #404040;
  border-radius: 15px;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.3);
`;

const SearchBoxButton = styled.div`
  margin-left: 15px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 40px;
  padding-right: 48px;
  background: #c9ac8c;
  border-radius: 15px;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #3c2710;
`;

const BoxSearchList = styled.div`
  margin-top: 160px;
`;

const SearchAuthItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: #fff;
`;


