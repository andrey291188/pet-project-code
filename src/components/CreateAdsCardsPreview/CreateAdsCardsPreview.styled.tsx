import styled from "styled-components";

export const AdsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1250px;
  margin-left: auto;
  margin-right: auto;
  gap: 30px;
  padding-bottom: 30px;

  @media (max-width: 1249px) {
    width: 930px;
  }

  @media (max-width: 975px) {
    width: 610px;
  }

  @media (max-width: 696px) {
    width: 290px;
  }
`;

export const ItemCard = styled.li`
  width: 290px;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 5px 20px 20px 20px;
  &:hover {
    box-shadow: 0 15px 25px rgba(255, 255, 255, 0.6);
  }
`;

export const ImageItem = styled.img`
  width: 250px;
  height: 280px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
  margin-bottom: 15px;
`;

export const TitleItem = styled.h3`
  height: 24px;
  color: white;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 8px;
  }
`;

export const PriceItem = styled.p`
  color: white;
`;

export const FavoritButton = styled.button`
  margin-left: auto;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  border: none;
  border-radius: 50%;
  outline: none;
  background: none;
  color: #fff;
  text-decoration: none;

  overflow: hidden;
  letter-spacing: 1;

  &:hover {
    background: #03e9f4;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 35px #03e9f4,
      0 0 50px #03e9f4;
  }
`;
