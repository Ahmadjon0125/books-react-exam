import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import axios from "axios";
import useLang from "../../../hooks/useLang";
import ContentData from "../../../assets/content";

export const Security = () => {
	let [lang] = useLang()
  const { token, setToken } = useAuth();
  console.log(token);
  const [accounts, setAccounts] = useState([]);
  console.log(accounts);

  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/user/me`, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => setAccounts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const funcSecurity = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { email, currentPassword, newPassword } = evt.target.elements;

    formData.append("email", email.value);
    formData.append("currentPassword", currentPassword.value);
    formData.append("newPassword", newPassword.value);
    axios
      .put(`https://book-service-layer.herokuapp.com/user/security`, formData, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form className="mt-5 d-flex flex-column w-50 ms-5" onSubmit={funcSecurity}>
				<p>{ContentData[lang].account_email}</p>
        <input
          type="email"
          name="email"
          className="form-control mb-4"
          defaultValue={accounts.email}
        />
				<p>{ContentData[lang].account_current}</p>
        <input className="mb-4 form-control" type="password" name="currentPassword" />
        <div className="inputs d-flex ">
					<div>
						<p >{ContentData[lang].account_password}</p>
						<input className="form-control " type="password" name="newPassword" />
					</div>
					<div className="ms-auto me-5">
						<p className="ms-5">{ContentData[lang].account_confirm}</p>
						<input className="ms-5 form-control" type="password" name="newPassword" />
					</div>
				</div>
        <button className="btn btn-primary mt-3 w-25 ms-auto" type="submit">{ContentData[lang].account_save}</button>
      </form>
    </div>
  );
};

