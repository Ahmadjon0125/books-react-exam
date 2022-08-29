import { useContext } from 'react'
import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Logo from './assets/images/Badiiyat.svg'
import { MainSection } from './components/MainSection/MainSection'
import { Settings } from './components/Settings/Settings'
import { ThemeContext } from './context/ThemeContext'
import { AuthJadid } from './Pages/NavPages/BoshSahifa/AuthJadid/AuthJadid'
import { AuthMustaqillik } from './Pages/NavPages/BoshSahifa/AuthMustaqillik/AuthMustaqillik'
import { AuthSovet } from './Pages/NavPages/BoshSahifa/AuthSovet/AuthSovet'
import { AuthTemuriy } from './Pages/NavPages/BoshSahifa/AuthTemuriy/AuthTemuriy'
import { BoshSahifa } from './Pages/NavPages/BoshSahifa/BoshSahifa'
import { Forum } from './Pages/NavPages/Forum/Forum'
import { Maqolalar } from './Pages/NavPages/Maqolalar/Maqolalar'
import { BookJadid } from './Pages/NavPages/Nasr/BookJadid/BookJadid'
import { BookMustaqillik } from './Pages/NavPages/Nasr/BookMustaqillik/BookMustaqillik'
import { BookSovet } from './Pages/NavPages/Nasr/BookSovet/BookSovet'
import { BookTemuriy } from './Pages/NavPages/Nasr/BookTemuriy/BookTemuriy'
import { Nasr } from './Pages/NavPages/Nasr/Nasr'
import { Nazm } from './Pages/NavPages/Nazm/Nazm'
import useLang from "./hooks/useLang"
import "./Private.scss"
import ContentData from './assets/content'

export function Private() {
	const { theme } = useContext(ThemeContext);
	let [lang] = useLang()
  return (
    <MainBox className={theme}>
      <Wrap className={`header ${theme}`}>
        <div className="container">
          <WrapInner className="header__inner">
            <Link to="/">
              <img src={Logo} alt="site-logo" width={96} height={36} />
            </Link>
            <NavbarSite className="header__navbar navbar">
              <NavList className="navbar__list">
                <NavItem className="navbar__item">
                  <NavLink to="/" className="navbar__link">
                    {ContentData[lang].nav_home}
                  </NavLink>
                </NavItem>
                <NavItem className="navbar__item">
                  <NavLink to="/nasr" className="navbar__link">
                    {ContentData[lang].nav_nasr}
                  </NavLink>
                </NavItem>
                <NavItem className="navbar__item">
                  <NavLink to="/nazm" className="navbar__link">
                    {ContentData[lang].nav_nazm}
                  </NavLink>
                </NavItem>
                <NavItem className="navbar__item">
                  <NavLink to="/maqolalar" className="navbar__link">
                    {ContentData[lang].nav_maqolalar}
                  </NavLink>
                </NavItem>
                <NavItem className="navbar__item">
                  <NavLink to="/forum" className="navbar__link">
                    {ContentData[lang].nav_forum}
                  </NavLink>
                </NavItem>
              </NavList>
              <div>
                <Settings />
              </div>
            </NavbarSite>
          </WrapInner>
        </div>
      </Wrap>
      <main>
        <section>
          <div className="container">
            <MainSection />
          </div>
        </section>
        <section>
          <div className="container">
            <Routes>
              <Route path="/" element={<BoshSahifa />}>
                <Route path="authTemuriy" element={<AuthTemuriy />} />
                <Route path="/authJadid" element={<AuthJadid />} />
                <Route path="/authSovet" element={<AuthSovet />} />
                <Route path="/authMustaqillik" element={<AuthMustaqillik />} />
              </Route>

              <Route path="/nasr" element={<Nasr />}>
                <Route path="bookJadid" element={<BookJadid />} />
                <Route path="bookTemuriy" element={<BookTemuriy />} />
                <Route path="bookSovet" element={<BookSovet />} />
                <Route path="bookMustaqillik" element={<BookMustaqillik />} />
              </Route>
              <Route path="/nazm" element={<Nazm />}>
                Nazm
              </Route>
              <Route path="/maqolalar" element={<Maqolalar />}>
                Maqolalar
              </Route>
              <Route path="/forum" element={<Forum />}>
                Forum
              </Route>
            </Routes>
          </div>
        </section>
      </main>
    </MainBox>
  )
}

const Wrap = styled.div`
  background: #191919;
  border: 1px solid rgba(255, 255, 255, 0.1);
`
const WrapInner = styled.div`
  display: flex;
  align-items: center;
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  padding-left: 0;
`

const NavItem = styled.li`
  margin-right: 43px;
  font-weight: 300;
  font-size: 16px;
  line-height: 144.4%;
  color: #ffffff;
`
const NavbarSite = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
	padding: 0;
`
const MainBox = styled.div`
  width: 100vw;
  background-color: #191919;
`
