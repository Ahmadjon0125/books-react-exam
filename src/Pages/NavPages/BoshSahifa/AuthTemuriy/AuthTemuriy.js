

import "./AuthTemuriy.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const AuthTemuriy = () => {
  const [temuriylar, setTemuriylar] = useState([]);
  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/author/genreId/1`)
      .then((res) => setTemuriylar(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <div>
        <ul className="temuriylar__list">
          {temuriylar.length &&
            temuriylar.map((e) => (
              <li className="temuriylar__item">
                <Link to={`/genrel/${e.id}`} >
                  <img
                    className="temuriylar__img"
                    src={`https://book-service-layer.herokuapp.com/${e.image}`}
                    width={215}
                    height={132}
                    alt=""
                  />
                  <div>
                    <strong className="temuriylar__name">{e.first_name}</strong>
                    <strong className="temuriylar__name"> {e.last_name}</strong>
                  </div>
                  <div>
                    <strong className="temuriylar__birth">
                      {e.date_of_birth}
                    </strong>
                    <strong className="temuriylar__birth">
                      {" "}
                      {e.date_of_death}
                    </strong>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
