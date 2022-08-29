import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import axios from "axios";
import useLang from "../../../hooks/useLang";
import ContentData from "../../../assets/content";

export const Account = () => {
	let [lang] = useLang()
  const { token, setToken } = useAuth();
  const [account, setAccount] = useState([]);

  console.log(account);

  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/user/me`, {
        headers: {
          
          Authorization: token.token,
        },
      })
      .then((res) => setAccount(res.data))
      .catch((err) => console.log(err));
  }, [token]);

  const funcAccount = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { first_name, last_name, phone, image } = evt.target.elements;

    formData.append("first_name", first_name.value);
    formData.append("last_name", last_name.value);
    formData.append("phone", phone.value);
    formData.append("image", image.files[0]);
    axios
      .put(`https://book-service-layer.herokuapp.com/user/account`, formData, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="mt-4"> 
      <form onSubmit={funcAccount} action="" className=" mt-5">
        <div className="accounts d-flex justify-content-around pe-5 me-5">
					<div className="accountLeft mb-5">
										<img className="rounded-circle" src={`https://book-service-layer.herokuapp.com/${account.image}`} width={175} height={175} alt="" />
					<input type="file" name="image" className="accountFile btn btn-light" />
										</div>
					<div className="accountRight d-flex flex-column">
										<input
											type="text"
											name="first_name"
											defaultValue={account.first_name}
											className="form-control my-3"
										/>
										<input className="form-control" type="text" name="last_name" defaultValue={account.last_name} />
										<input className="form-control my-3" type="tel" name="phone" defaultValue={account.phone} />
        <button type="submit" className="btn btn-primary d-inline-block w-75 mt-3 ms-auto">{ContentData[lang].account_save}</button>
									</div>
				</div>
      </form>
    </div>
  );
};
