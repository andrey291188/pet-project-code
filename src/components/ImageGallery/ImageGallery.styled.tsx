import styled from "styled-components";


export const ImageGalleryWrapper = styled.div`
min-width: 240px;
min-height: 380px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 30px;
  background: linear-gradient(#141e30, #243b55);
  box-shadow: 0 15px 25px rgba(255,255,255,.6);
  border-radius: 10px;
  @media (max-width: 354px) {
    padding: 15px;
  }
`;

export const ImgContainer = styled.div`
display: flex;
justify-content: center;`;

export const FotoAds = styled.img`
  width: 420px;
  height: 440px;
  border-radius: 5px;
  box-shadow: 0 15px 25px rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;

  @media (max-width: 675px) {
    width: 340px;
    height: 360px;
  }

  @media (max-width: 475px) {
    width: 240px;
    height: 260px;
  }

  @media (max-width: 354px) {
    width: 220px;
    height: 260px;
  }

`;


export const BtnPagContainer = styled.div`
   width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PaginationBtn = styled.button`
  width: 80%;
  height: 40px;

  font-size: 24px;
  border: 2px dashed #fff;
  border-radius: 5px;
  outline: none;
  background: none;

  padding: 10px 10px;
  position: relative;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 4px;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1000ms;
  &:hover {
    color: #03e9f4;
    border: 2px dashed #03e9f4;
  }
`

export const ItemIndex = styled.p`
 color: #fff;
 padding: 10px;
margin-left: 10px;
margin-right: 10px;
 font-size: 20px;
 border: 2px solid #fff;
 border-radius: 5px;`;

