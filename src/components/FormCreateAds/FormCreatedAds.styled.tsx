import styled from "styled-components";
import { Formik, Form, Field } from "formik";


export const SupportFormik = styled(Formik)``;

export const RegisterFormTitle = styled.h2`
text-align: center;
margin-bottom: 10px;
  font-size: 24px;
  color: #fff;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const Wrapper = styled.div`
  padding-top: 140px;
  padding-bottom: 160px;
`;

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;

  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(255,255,255,.6);
  border-radius: 10px;

  background: linear-gradient(#141e30, #243b55);

  @media (max-width: 500px) {
    width: 100%;
    padding: 15px;
  }
`;

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
  min-height: 24px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  font-size: 16px;
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const InputFieldDesc = styled(Field)`
  width: 100%;
  height: 172px;
  padding: 4px;
  min-height: 24px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  resize: none;
  font-size: 16px;
  text-align: left;
  color: #fff;
 box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #fff;
  outline: none;
  background: transparent;

  @media (max-width: 500px) {
    font-size: 14px;
  }

  &::-webkit-scrollbar {
   width: 5px;
 
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 8px;
  }
`;

export const ButtonSubmit = styled.button`
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
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1000ms;
  &:hover {
    background: #03e9f4;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 35px #03e9f4,
                0 0 50px #03e9f4;
  }
`;