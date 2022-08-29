import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ThemeContext } from "../../context/ThemeContext";

export const AuthorId = () => {
	const { theme } = useContext(ThemeContext);
  const params = useParams();
  const [data, setData] = useState();
  const { token } = useAuth();

  useEffect(() => {
    axios
      .get(
        `https://book-service-layer.herokuapp.com/author/authorId/${params.id}`,
        {
          headers: {
            Authorization: token.token,
          },
        }
      )
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, [params.id]);

  useEffect(() => {
    axios
      .get(
        `https://book-service-layer.herokuapp.com/book/bookId/${params.id}`,
        {
          headers: {
            Authorization: token.token,
          },
        }
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }, [params.id]);

  return (
    <>
      <PagesGenreld className="theme">
        <Container>
          <div className="d-flex mt-5 row justify-content-between theme">
            <div className="me-5 col-4 theme">
              <img
                src={`https://book-service-layer.herokuapp.com/${data?.image}`}
                width={582}
                height={500}
                alt=""
              />
              <div className="mt-3">
                <div className="mb-3">
                  <p className="m-0">Tavallud sanasi :  </p>
                  <strong>{data?.date_of_birth}</strong>
                </div>
                <div className="theme">
                  <p className="m-0 theme">Vafot etgan sanasi : </p>
                  <strong>{data?.date_of_death}</strong>
                </div>
              </div>
            </div>
            <div className="ms-5 col-4 theme">
              <div>
                <strong className="fs-1">{data?.first_name}  </strong>
                <strong className="fs-1">  {data?.last_name}</strong>
              </div>
              <p>{data?.bio}</p>
            
							<div className="btn btn-secondary ">
									<NavLink to="/" className="BookIdBack text-black fs-4 ">
															⇱Back
									</NavLink>
								</div>
            </div>
          </div>
        </Container>
      </PagesGenreld>
    </>
  );
};

const PagesGenreld = styled.div`
  position: absolute;
  top: 86px;
  width: 100%;
  height: 60%;
  background-color: #fff;
`;

const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;
