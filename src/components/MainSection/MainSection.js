
import styled from "styled-components";
import MainBgImg from "../../assets/images/MainBgImg.png"


export const MainSection = () => {
  return (
    <BgImg>
			
      <img src={MainBgImg} alt="MainBgImg" width={1200} height={347} />
    </BgImg>
  );
};

const BgImg = styled.div`
margin-top: 54px;
padding-left: 15px;
padding-right: 15px;
`