import styled from "styled-components";

export const PlaceHolderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PlaceHolderImg = styled.img`
  position: fixed;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 290px;
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(255, 255, 255, 0.6);
`;
