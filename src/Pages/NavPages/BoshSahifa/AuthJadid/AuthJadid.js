

import "./AuthJadid.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const AuthJadid = () => {
  const [jaddid, setJaddid] = useState([]);

  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/author/genreId/2`)
      .then((res) => setJaddid(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (                                                  
    <>
      <div>
        <ul className="jadidAdabiyoti__list">
          {jaddid.length &&
            jaddid.map((e) => (
           <li className="jadidAdabiyoti__item">
               <Link  to={`/genrel/${e.id}`}>
                <img
                  className="jadidAdabiyoti__img"
                  src={`https://book-service-layer.herokuapp.com/${e.image}`}
                  width={215}
                  height={132} 
                  alt=""
                />
                <div>
                  <strong className="jadidAdabiyoti__name">
                    {e.first_name}
                  </strong>
                  <strong className="jadidAdabiyoti__name">
                    {" "}
                    {e.last_name}
                  </strong>
                </div>
                <div>
                  <strong className="jadidAdabiyoti__birth">
                    {e.date_of_birth}
                  </strong>
                  <strong className="jadidAdabiyoti__birth">
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
