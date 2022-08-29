import "./BookJadid.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookJadid = () => {
  const [jadid, setJadid] = useState([]);
  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/book/genreId/2`)
      .then((res) => setJadid(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <ul className="jadid__list">
          {jadid.length &&
            jadid.map((e) => (
              <li className="jadid__item">
                <Link to={`/book/${e.id}`}>
                  <img
                    src={`https://book-service-layer.herokuapp.com/${e.image}`}
                    width={245}
                    height={286}
                    alt=""
                  />
                </Link>
                <Jadid__title>{e.title}</Jadid__title>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

const Jadid__title = styled.h4`
  margin-top: 15px;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #c9ac8c;
`;
