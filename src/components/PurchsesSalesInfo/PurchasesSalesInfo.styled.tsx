import styled from "styled-components";

export const BuyerInfoSection = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

export const TitleBuyerInfo = styled.h4`
  width: 80%;
  font-size: 34px;
  color: white;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
  background: rgba(0, 0, 0, 0.5);
`;

export const TotalInfo = styled.p`
 width: 70%;
  font-size: 24px;
  color: white;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
  background: rgba(0, 0, 0, 0.5);
`

export const BuyList = styled.ul`
  width: 1220px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 1219px) {
    width: 910px;
  }

  @media (max-width: 975px) {
    width: 610px;
  }

  @media (max-width: 696px) {
    width: 290px;
    padding-left: 5px;
    padding-right: 5px;
  }
`;
export const BuyItem = styled.li`
  width: 290px;
  text-align: center;
  font-size: 20px;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 20px;
`;

export const TextItemBuyInfo = styled.p`
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
  background: white;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
