import { NavLink } from "react-router-dom";
import styled from "styled-components";

type StyledButtonProps = {
  $active: String | undefined;
};

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1888800
`

export const UserMenuWrapper = styled.div`
display: flex;
`
export const AvatarUser = styled.img`
  cursor: pointer;
  width: 45px;
  border-radius: 14px;
  margin-right: 10px;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
`

export const MenuUserButton = styled.button<StyledButtonProps>`
  font-size: 16px;
  padding: 10px 10px 10px 10px;
  border: solid 2px white;
  border-radius: 4px;
  background-color: ${(props) =>
    props.$active ? "#03e9f4" : "rgba(0, 0, 0, 0.3)"};
  color: ${(props) => (props.$active ? "black" : "white")};
  display: flex;
  align-items: center;
`;

export const MenuWrapper = styled.ul`
  width: 200px;
  position: absolute;
  top: 90px;
  right: 50px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 4px 4px 6px rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const MenuUserNavLink = styled(NavLink)`
  padding-top: 10px;
  padding-bottom: 10px;
  color: black;
  
  font-size: 18px;
  display: block;
  &.active {
    color: #03e9f4;
  }
`;

export const MenuListItem = styled.li`
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  width: 90%;
  text-align: center;
`;

export const LogoutButton = styled.button`
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px 10px 10px 10px;
  font-size: 16px;
  border: solid 2px white;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  &:hover,
  :focus {
    background: #03e9f4;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 35px #03e9f4,
                0 0 50px #03e9f4;
    color: black;
  }
`;

export const AddAds = styled.button`
  margin-top: 10px;
  font-size: 16px;
  padding: 10px 10px 10px 10px;
  border: solid 2px black;
  border-radius: 4px;
  background-color: white;
  &:hover,
  :focus {
    border: solid 2px #03e9f4;
    color: #03e9f4;
  }
`
