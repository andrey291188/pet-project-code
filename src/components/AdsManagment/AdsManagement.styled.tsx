import styled from "styled-components";

type StyledButtonProps = {
  $active: String | undefined;
};

export const AdsList = styled.ul`
  color: black;
  display: flex;
  flex-direction: column;
  width: 1250px;
  margin-left: auto;
  margin-right: auto;
  gap: 30px;
  padding-bottom: 100px;

  @media (max-width: 1249px) {
    width: 930px;
  }

  @media (max-width: 975px) {
    width: 650px;
  }

  @media (max-width: 696px) {
    width: 300px;
  }
`;

export const ItemCard = styled.li`
  display: flex;

  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 20px;

  @media (max-width: 696px) {
    flex-wrap: wrap;
  }
`;

export const ImageItem = styled.img`
  cursor: pointer;
  width: 260px;

  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
  margin-bottom: 15px;
  margin-right: 30px;

  @media (max-width: 975px) {
    height: 348px;
  }

  @media (max-width: 696px) {
    height: 302px;
  }
`;

export const WrapperInfoAds = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
  padding: 15px;
  margin-bottom: 15px;
`;

export const TitleItem = styled.h3`
  text-align: center;
  padding: 5px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
  margin-bottom: 15px;
`;

export const PriceItem = styled.p`
  text-align: center;
  padding: 5px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
  margin-bottom: 15px;
`;

export const DescItem = styled.p`
  padding: 5px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
  height: 80px;
  overflow-y: auto;
  margin-bottom: 15px;

  &::-webkit-scrollbar {
   width: 5px;
 
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 8px;
  }
`;

export const ViewsWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
export const ViewsCounter = styled.p`
  padding: 5px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
  margin-right: 10px;
`;

export const ViewsResetCounter = styled.button`
  width: 100px;
  height: 30px;
  text-align: center;
  font-size: 14px;
  border: 2px solid #fff;
  border-radius: 5px;
  outline: none;
  background: none;
  padding-right: 2px;

  color: #fff;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 4px;

  &:hover {
    background: #03e9f4;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 35px #03e9f4,
      0 0 50px #03e9f4;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-around;
`;

export const ButtonChangeOption = styled.button`
  height: 30px;
  text-align: center;
  font-size: 14px;
  border: 2px solid #fff;
  border-radius: 5px;
  outline: none;
  background: none;
  padding-right: 2px;
 
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 4px;

  &:hover {
    background: #03e9f4;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 35px #03e9f4,
      0 0 50px #03e9f4;
  }

  &:last-child {
    color: red;
    border: 2px solid red;
  }
`;

export const ButtonActiveOption = styled.button<StyledButtonProps>`
  height: 30px;
  text-align: center;
  font-size: 14px;
  border: ${(props) => (props.$active ? "2px solid green" : "2px solid red")};
  border-radius: 5px;
  outline: none;
  background: none;
  padding-right: 2px;
 
  color: ${(props) => (props.$active ? "green" : "red")};
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 4px;

  &:hover {
    background: #03e9f4;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 35px #03e9f4,
      0 0 50px #03e9f4;
  }
`;
