import { Formik, Form, Field } from "formik";
import styled from "styled-components";

export const AdsSection = styled.section`
margin-left: auto;
margin-right: auto;
width: 100%;
height: 100%;
padding-top: 100px;
padding-bottom: 60px;
`;

export const SupportFormik = styled(Formik)``;


export const FormikForm = styled(Form)`
 
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  padding: 30px;
 
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;

  @media (max-width: 500px) {
    width: 90%;
    padding: 15px;
  }
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 18px;
  color: #fff;
`;

export const InputField = styled(Field)`
  width: 100%;
  height: 24px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;

  font-size: 16px;
  text-align: center;
  color: #fff;

  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const ButtonSubmit = styled.button`
  display: block;
  width: 60%;
  height: 45px;
  margin-top: 12px;
  margin-right: auto;
  margin-left: auto;
  
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
`;