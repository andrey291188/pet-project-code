import { NavLink } from "react-router-dom";
import styled from "styled-components";

type StyledButtonProps = {
    $active: String | undefined;
  };

export const ButtonAdsMenu = styled.button<StyledButtonProps>`
   font-size: 16px;
   height: 45px;
  padding: 10px 10px 10px 10px;
  border: solid 2px white;
  border-radius: 4px;
  background-color: ${(props) =>
    props.$active ? "#03e9f4" : "rgba(0, 0, 0, 0.3)"};
  color: ${(props) => (props.$active ? "black" : "white")};
  display: flex;
  align-items: center;
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1888800
`

export const MenuWrapper = styled.ul`
  width: 200px;
  position: absolute;
  top: 90px;
  left: 50px;
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