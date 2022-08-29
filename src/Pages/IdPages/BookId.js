import { useEffect, useState } from "react";
import styled from "styled-components"
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const BookId = () => {
  const params = useParams();
  const [data, setData] = useState();
  const { token } = useAuth();
console.log(data);
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
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, [params.id]);
  return (
    <>
      <Qqqqqqq>
        <Container>
          <div className="d-flex mt-5">
					
            <div className="me-5">
              <img
                src={`https://book-service-layer.herokuapp.com/${data?.image}`}
                width={382}
                height={400}
                alt=""
              />
            </div>
            <div className="ms-5">
                <h2>{data?.title}</h2>
								<p>Sahifalar soni: <title>{data?.page}</title></p>
								<p>Chop etilgan: <title>{data?.year}</title></p>
								<p>Janri: <title>{data?.genre_id}</title></p>
                <p>{data?.description}</p>
								<div className="btn btn-secondary ">
									<NavLink to="/" className="BookIdBack text-black fs-4 ">
															⇱Back
									</NavLink>
								</div>
            </div>
          </div>
        </Container>
      </Qqqqqqq>
    </>
  );
};


const Qqqqqqq = styled.div`
  position: absolute;
  top: 86px;
  width: 100%;
  height: 86%;
  background-color: #fff;
`;

const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;
