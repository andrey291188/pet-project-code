import styled from "styled-components";

export const Overlay = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  overflow-y: auto;

  
`

export const Modals = styled.div`
  width: 70%;
  @media (max-width: 500px) {
    width: 85%;
  }
  
`
