import { useState } from "react";
import styled from "styled-components";
import searchImg from "../../assets/images/searchImg.png";
import useLang from "../../hooks/useLang";
import axios from "axios"
import ContentData from "../../assets/content";

export const Searchbook = () => {

  let [lang] = useLang()
  const [data, setData] = useState({});

  function handleChangeBook(evt) {
    evt.preventDefault();

    const { inputBook } = evt.target.elements;
console.log( inputBook.value.toLowerCase());
    axios
      .get(
        `https://book-service-layer.herokuapp.com/book/search?book=${inputBook.value?.toLowerCase()}`
      )
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }



  return (
    <>
			<SearchbookBox>
      <SearchbookInner>
        <SearchbookTitle>{ContentData[lang].qidirish__qidirish}</SearchbookTitle>
        <form className="d-flex" onSubmit={handleChangeBook} >
          <SearchbookInput
					name="inputBook"
            type="text"
            placeholder={ContentData[lang].qidirish_input}
          />
          <SearchbookButton type="submit">
            <img src={searchImg} alt="" width={24} height={24} />
            {ContentData[lang].qidirish__qidirish}
          </SearchbookButton>
        </form>
      </SearchbookInner>
    </SearchbookBox>
		<BoxSearchbook>
          {data.length &&
            data.map((e) => (
              <SearchabookItem>
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
                  <h2>{e.title}</h2>
                  <p>{e.page}</p>
                  <p>{e.price}</p>
                  <p>{e.year}</p>
                  <p>{e.description}</p>
                </div>
              </SearchabookItem>
            ))}
        </BoxSearchbook>
		</>
  );
};

const SearchbookBox = styled.div`
  width: 100vh !important;
  position: absolute;
`;

const SearchbookInner = styled.div`
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

const SearchbookTitle = styled.h2`
  margin-bottom: 13px;
  font-weight: 400;
  font-size: 31px;
  line-height: 34px;
  color: #c9ac8c;
`;

const SearchbookInput = styled.input`
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

const SearchbookButton = styled.button`
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

const BoxSearchbook = styled.div`
  margin-top: 160px;
`;

const SearchabookItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: #fff;
`;
