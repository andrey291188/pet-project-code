import styled from "styled-components";

export const TitleUserCard = styled.h4`
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
`

export const UserCardList = styled.ul`
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
  }

  @media (max-width: 350px) {
    padding: 5px;
  }
`

export const ItemUserCard = styled.li`
  width: 290px;
  text-align: center;
  font-size: 20px;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 20px;
    
`

export const AvatarUser = styled.img`
width: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
  margin-bottom: 15px;
  margin-right: 30px;
margin-bottom: 20px;

`

export const TextUser = styled.p`
 padding: 5px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
  background: white;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

export const DeleteUser = styled.button`
width: 100%;
  height: 45px;
  margin-top: 12px;
  
  font-size: 24px;
  border: 2px dashed red; 
  border-radius: 5px;
  outline: none;
  background: none;

  padding: 10px 20px;
  position: relative;
  color: red;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 4px;

  &:hover {
    background: #03e9f4;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 35px #03e9f4,
                0 0 50px #03e9f4;
  }
  `

  