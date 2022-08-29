
import "./AuthMustaqillik.scss"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const AuthMustaqillik = () => {
  const [mustaqillikdavri, setmustaqillikdavri] = useState([]);

  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/author/genreId/4`)
      .then((res) => setmustaqillikdavri(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <ul className="mustaqillikdavri__list">
          {mustaqillikdavri.length &&
            mustaqillikdavri.map((e) => (
              <li className="mustaqillikdavri__item">
                <Link to={`/genrel/${e.id}`} >
                <img
                className="mustaqillikdavri__img"
                  src={`https://book-service-layer.herokuapp.com/${e.image}`}
                  width={215}
                  height={132}
                  alt=""
                />
                <div>
                  <strong className="mustaqillikdavri__name">{e.first_name}</strong>
                  <strong className="mustaqillikdavri__name"> {e.last_name}</strong>
                </div>
                <div>
                  <strong className="mustaqillikdavri__birth">{e.date_of_birth}</strong>
                  <strong className="mustaqillikdavri__birth"> {e.date_of_death}</strong>
                </div>
              </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
