

import "./BookSovet.scss"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookSovet = () => {
  const [sovet, setSovet] = useState([]);
  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/book/genreId/3`)
      .then((res) => setSovet(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <ul className="sovet__list">
          {sovet.length &&
            sovet.map((e) => (
              <li className="sovet__item">
                <Link to={`/book/${e.id}`}>
                  <img
                    src={`https://book-service-layer.herokuapp.com/${e.image}`}
                    width={245}
                    height={286}
                    alt=""
                  />
                </Link>
                <Sovet__title>{e.title}</Sovet__title>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

const Sovet__title = styled.h4`
margin-top: 15px;
margin-bottom: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #c9ac8c;
`;

