import styled from "styled-components";


export const AvatarUpdateWrapper = styled.form`
    display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;

  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(255, 255, 255, 0.6);
  border-radius: 10px;

  background: linear-gradient(#141e30, #243b55);

`

export const InputField = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const Button = styled.button`
  width: 60%;
  height: 45px;
  margin-top: 12px;

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
`;

export const DescImage = styled.p`
  display: block;
  border: 2px solid #fff;
  padding: 38px;
  border-radius: 5px;
  color: #fff;
  font-size: 30px;
`;

export const FotoAds = styled.img`
min-width: 240px;
min-height: 260px;
  border-radius: 5px;
  box-shadow: 0 15px 25px rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
`;