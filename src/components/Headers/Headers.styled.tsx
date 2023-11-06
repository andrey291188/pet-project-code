import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
 
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 15px;
  padding-bottom: 15px;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: space-between;

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.6);
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ListNavigate = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const ItemNavigate = styled.li`
 display: block;
  &:not(:first-child) {
    margin-left: 15px;
  }
`;

export const LinkNav = styled(NavLink)`
  font-size: 16px;
  padding-top: 10px;
  padding-bottom: 12px;
  padding-left: 10px;
  padding-right: 10px;
  border: solid 2px white;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  align-items: center;

  &.active {
        background-color: #03e9f4;
        color: black;
    }
`;
