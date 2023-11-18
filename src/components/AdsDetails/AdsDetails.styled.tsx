import { Link } from "react-router-dom";
import styled from "styled-components";

export const AdsDetailsSection = styled.section`
padding-top: 100px;
padding-bottom: 120px;
  padding-left: 30px;
  padding-right: 30px;
  @media (max-width: 500px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const WrapperAdsDetails = styled.div`
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

export const ListAdsDetails = styled.ul`
`;

export const CenteringWrap = styled.div`
display: flex;
gap: 20px;
justify-content: space-around;
margin-bottom: 30px;
flex-wrap: wrap;
`

export const ItemAdsDetails = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TitleAdsDetails = styled.h4`
  display: block;
  width: 340px;
  margin-bottom: 20px;
  text-align: center;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
  background: white;

  @media (max-width: 706px) {
    margin-bottom: 20px;
  }


  @media (max-width: 445px) {
    width: 240px;
  }
`;

export const PriceAdsDetails = styled.p`
  display: block;
  width: 210px;
  margin-bottom: 20px;
  text-align: center;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
  background: white;
`;

export const ImageAdsDetails = styled.img`
display: flex;
justify-content: center;
cursor: pointer;
  width: 100%;
  height: 366px;

  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);

  @media (max-width: 686px) {
    margin-bottom: 30px;
  }

  @media (max-width: 445px) {
    max-width: 250px;
  }

  @media (max-width: 360px) {
 
  }
`;

export const UserWraperAdsDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarUserAdsDetails = styled.img`
height: 208px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
  width: 200px;
`;

export const UserNameAdsDetails = styled.p`
  color: white;
  margin-bottom: 10px;
`;

export const ListContactAdsDetails = styled.ul`
  width: 220px;
  text-align: center;
  background: white;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  box-sizing: border-box;
  padding-top: 8px;
  padding-bottom: 10px;
  padding-right: 8px;
  padding-left: 8px;
`;

export const TitleListContactAdsDetails = styled.p`
  color: black;
`;

export const ItemContactAdsDetails = styled.li``;

export const LinkContactAdsDetails = styled.a`
  display: block;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1000ms;
  &:hover {
    color: #03e9f4;
    border: 1px solid #03e9f4;
  }
`;

export const DescAdsDetails = styled.p`
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
  background: white;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 30px;
  min-height: 100px;
`;

export const ViewsAdsDetails = styled.p`
  display: inline;
  align-items: center;
  padding: 8px;
  background: white;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
  border-radius: 10px;
`;

export const WrapperOtherAdsDetail = styled.div``;

export const TitleOtherAdsDetail = styled.h5`
  color: white;
  font-size: 24px;
  text-align: center;
`;

export const ButtonBuy = styled.button`
display: block;
width: 60%;
height: 45px;
margin-bottom: 20px;
margin-left: auto;
margin-right: auto;

font-size: 24px;
border: 2px dashed #fff; 
border-radius: 5px;
outline: none;
background: none;

padding: 10px 20px;

color: #fff;
font-size: 16px;
text-decoration: none;
text-transform: uppercase;
overflow: hidden;
letter-spacing: 4px;
transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1000ms;
&:hover {
  background: #03e9f4;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 35px #03e9f4,
              0 0 50px #03e9f4;
}
`;

export const ButtonGoBack = styled(Link)`
  display: block;
width: 100px;
height: 20px;
margin-bottom: 20px;
text-align: center;
font-size: 24px;
border: 2px dashed #fff; 
border-radius: 5px;
outline: none;
background: none;

padding: 10px 20px;

color: #fff;
font-size: 16px;
text-decoration: none;
text-transform: uppercase;
overflow: hidden;
letter-spacing: 4px;
transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1000ms;
&:hover {
  background: #03e9f4;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 35px #03e9f4,
              0 0 50px #03e9f4;
}
`