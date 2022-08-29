import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";
import "./MyAccount.scss"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import useLang from "../../hooks/useLang";
import ContentData from "../../assets/content";

export const MyAccount = () => {
	let [lang] = useLang()
	const { theme } = useContext(ThemeContext);
  return (
    <Bbb>
      <MyAccount__box>
        <Container>
          <div>
            <NavLink className="MyAccount__navLink" to="account">{ContentData[lang].my_account}</NavLink>
            <NavLink className="MyAccount__navLink" to="security">{ContentData[lang].accounty_Security}</NavLink>
            <NavLink className="MyAccount__navLink" to="makePayement">{ContentData[lang].make_payment}</NavLink>
          </div>
          <div>
            <Outlet />
          </div>
					<MainPage>
					<NavLink to="/" className="Back">
                    ⇱Back
                  </NavLink>
					</MainPage>
        </Container>
      </MyAccount__box>
    </Bbb>
  );
};

const Bbb = styled.div`
position: absolute;
top: 0;
background-color: #fff;
width: 100vw;
height: 100vh;
overflow: hidden;
`

const MyAccount__box = styled.div`
  position: absolute;
  top: 0;
  padding-top: 30px;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 81px;
  padding-right: 81px;
`;

const MainPage = styled.div`
	position: absolute;
	/* background-color: lightblue;	 */
	color: white;
	top: 30px;
	left: 10px;
`