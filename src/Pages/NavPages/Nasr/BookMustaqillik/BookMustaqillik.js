

import "./BookMustaqillik.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookMustaqillik = () => {
  const [mustaqil, setMustaqil] = useState([]);
  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/book/genreId/4`)
      .then((res) => setMustaqil(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <ul className="mustaqil__list">
          {mustaqil.length &&
            mustaqil.map((e) => (
              <li className="mustaqil__item">
                <Link to={`/book/${e.id}`}>
                  <img
                    src={`https://book-service-layer.herokuapp.com/${e.image}`}
                    width={245}
                    height={286}
                    alt=""
                  />
                </Link>
                <Mustaqil__title>{e.title}</Mustaqil__title>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

const Mustaqil__title = styled.h4`
  margin-top: 15px;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #c9ac8c;
`;

