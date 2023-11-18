import styled from "styled-components";

export const AdminMenuSection = styled.section`
margin-left: auto;
margin-right: auto;
width: 100%;
height: 100%;
padding-top: 100px;
padding-bottom: 60px;
`;


export const ChangeButton = styled.button`
display: block;
width: 80%;
  height: 45px;
  margin-top: 12px;
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
`