import { logInThunk } from "../../../store/authorization/thunkAuth";
import { FormikHelpers } from 'formik';
import { useAppDispatch } from "../../../store/store";
import {
  SupportFormik,
  FormikForm,
  InputField,
  Label,
  RegisterFormTitle,
  ButtonSubmit,
  Wrapper,
  DirectAnyForm,
  NavDirect,
} from "../RegisterLogin.styled";

interface LoginUser {
  email: string;
  password: string
}


const Login = () => {
  const dispatch = useAppDispatch()

  const handleSubmit = async (values: LoginUser, { resetForm }: FormikHelpers<LoginUser>) => {
    dispatch(logInThunk(values))
    resetForm();
  };
  
    return (
      
      <SupportFormik
      initialValues={{ email: "", password: ""}}
      onSubmit={handleSubmit}
    >
      <Wrapper>
        <FormikForm>
          <RegisterFormTitle>Login form</RegisterFormTitle>
    
          <Label>
            Email address
            <InputField type="email" name="email" required  placeholder="Enter your email" autoComplete="off"/>
          </Label>

          <Label>
            Password
            <InputField type="password" name="password" required  placeholder="Enter your password" autoComplete="off"/>
          </Label>

          <ButtonSubmit type="submit">Submit</ButtonSubmit>
      <DirectAnyForm>If you are not registered yet, use the <NavDirect to="/registered">registration</NavDirect> form</DirectAnyForm>
        </FormikForm>
      </Wrapper>

    </SupportFormik>
      
    );
  };
  
  export default Login;