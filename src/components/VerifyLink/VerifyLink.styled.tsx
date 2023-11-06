import styled from "styled-components";

export const VerifyWrapper = styled.div`
   padding-top: 140px;
   padding-bottom: 160px;
`

export const Wrapper = styled.div`
  text-align: center;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
 
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
`
export const Description = styled.p`
font-size: 24px;
 padding: 15px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.6);
  background: white;
  margin-bottom: 40px;
`

export const LinkVerify = styled.a`
 width: 60%;
  height: 45px;
  margin-top: 12px;
  
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

  &:hover {
    background: #03e9f4;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 35px #03e9f4,
                0 0 50px #03e9f4;
  }
`