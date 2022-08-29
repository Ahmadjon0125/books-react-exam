

import "./AuthSovet.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const AuthSovet = () => {
  const [sovetDavri, setSovetDavri] = useState([]);

  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/author/genreId/3`)
      .then((res) => setSovetDavri(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <ul className="sovetDavri__list">
          {sovetDavri.length &&
            sovetDavri.map((e) => (
              <li className="sovetDavri__item">
                <Link to={`/genrel/${e.id}`} >
                  <img
                    className="sovetDavri__img"
                    src={`https://book-service-layer.herokuapp.com/${e.image}`}
                    width={215}
                    height={132}
                    alt=""
                  />
                  <div>
                    <strong className="sovetDavri__name">{e.first_name}</strong>
                    <strong className="sovetDavri__name"> {e.last_name}</strong>
                  </div>
                  <div>
                    <strong className="sovetDavri__birth">
                      {e.date_of_birth}
                    </strong>
                    <strong className="sovetDavri__birth">
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

