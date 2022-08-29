
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";
import { useAuth } from "../../hooks/useAuth";
import useLang from "../../hooks/useLang";
import ContentData from "../../assets/content";

export const Settings = () => {
	let [lang] = useLang()
  const { token  } = useAuth();
  const [myAcc, setMyAcc] = useState([]);

  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/user/me`, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => setMyAcc(res.data))
      .catch((err) => console.log(err));
  }, [token]);

  return (
    <>
      <div className="d-flex align-items-center position-relative">
        <div>
          <MyPic
          className="My_Picture"
            src={`https://book-service-layer.herokuapp.com/${myAcc.image}`}
            width={40}
            height={10}
            alt="my picture"
          />
        </div>

        <div className=" dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
                <NavLink className="dropdown-item" to="/addBook">{ContentData[lang].book_book}</NavLink>
            </li>
            <li>
                <NavLink className="dropdown-item" to="/addAuthor">{ContentData[lang].nav_muallif}</NavLink>
            </li>
            <li className="">
                <NavLink className="dropdown-item" to="/myAccount">{ContentData[lang].my_account}</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const MyPic = styled.img`
border-radius: 30%;
margin-right: 10px;
`

