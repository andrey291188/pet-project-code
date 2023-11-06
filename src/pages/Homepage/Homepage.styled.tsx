import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomepageSection = styled.section`
  margin-left: auto;
  margin-right: auto;

  height: 100%;
  padding-top: 100px;
  padding-bottom: 60px;
`;

export const GrettingsWrappe = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 30px;

  @media (max-width: 500px) {
    width: 90%;
    padding: 15px;
  }
`;

export const Title = styled.h1`
  text-align: center;

  margin-bottom: 20px;
`;

export const Description = styled.p`
  text-align: center;
  margin-bottom: 10px;
`;
export const Author = styled.a`
  color: #03e9f4;
`;
export const ImageHomepage = styled.img`
  width: 90%;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(255, 255, 255, 0.6);
  border-radius: 10px;
`;

export const ButtonHomepage = styled(Link)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  height: 20px;
  margin-top: 12px;
  text-align: center;
  font-size: 24px;
  border: 2px dashed #fff;
  border-radius: 5px;
  outline: none;
  background: none;

  padding: 10px 20px;
  position: relative;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 4px;

  &:hover {
    background: #03e9f4;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 35px #03e9f4,
      0 0 50px #03e9f4;
  }

  @media (max-width: 354px) {
    height: 58px;
  }
`;
