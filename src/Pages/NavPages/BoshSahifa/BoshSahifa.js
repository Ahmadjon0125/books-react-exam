import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components';
import ContentData from '../../../assets/content';
import { Search } from '../../../components/Search/Search'
import useLang from '../../../hooks/useLang';

export function BoshSahifa() {
	let [lang] = useLang()
  return (
    <>
      <div className='container'>
        <Search />
        <HomeBox>
          <HomeTitle>{ContentData[lang].asosiy_kategoriyalar}</HomeTitle>
          <HomeList className="Authors">
            <HomeItem className="Authors__item">
              <NavLink to="/authTemuriy"><HomeStrong>{ContentData[lang].temuriylar_davri}</HomeStrong> </NavLink>
            </HomeItem>
            <HomeItem className="Authors__item">
              <NavLink to="/authJadid"><HomeStrong>{ContentData[lang].jadid_adabiyoti}</HomeStrong> </NavLink>
            </HomeItem>
            <HomeItem className="Authors__item">
              <NavLink to="/authSovet"><HomeStrong>{ContentData[lang].sovet_davri}</HomeStrong> </NavLink>
            </HomeItem>
            <HomeItem className="Authors__item">
              <NavLink to="/authMustaqillik"><HomeStrong>{ContentData[lang].mustaqillik_davri}</HomeStrong></NavLink>
            </HomeItem>
          </HomeList>
        <div>
					<Outlet />
				</div>
        </HomeBox>
      </div>
    </>
  )
}


const HomeBox = styled.div`
  margin-top: 160px;
`;

const HomeTitle = styled.h2`
  text-align: center;
  font-weight: 400;
  font-size: 31px;
  line-height: 34px;
  color: #c9ac8c;
`;

const HomeList = styled.ul`
  display: flex;
  justify-content: center;
`;

const HomeItem = styled.li`
  margin-right: 69px;
  margin-top: 30px;
	
`;

const HomeStrong = styled.strong`
  color: rgba(255, 255, 255, 0.6);
	text-decoration: none;
`;
