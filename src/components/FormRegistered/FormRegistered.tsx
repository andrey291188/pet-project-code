import { toast } from "react-toastify";
import { ButtonReversForm, ButtonSubmit, DirectAnyForm, FormikForm, InputField, Label, NavDirect, RegisterFormTitle, SupportFormik, Wrapper } from "../../pages/User/RegisterLogin.styled"
import { registerUser } from "../../service/authRequest";
import { MyErrorType } from "store/authorization/thunkAuth";

interface RegisterUser {
    name: string;
    email: string;
    phone: number | string;
    password: string
  }

  interface FormRegisterProps {
    setLinkVerify: (boolean: string) => void;
    setFormVisible: (value: boolean) => void;
    setLoader: (value: boolean) => void
  }

const FormRegister: React.FC<FormRegisterProps> = ({setLinkVerify, setFormVisible, setLoader}) => {
    

    const handleSubmit = async (values: RegisterUser, { resetForm }: { resetForm: () => void }) => {
        const {name, email, password, phone: phoneNumber} = values;
        const dataRegister = {name, email, password, phone: Number(phoneNumber)}
        setLoader(true)
        try {
          const {data: {confirm_email}} = await registerUser(dataRegister)
          setLinkVerify(confirm_email)
          toast.success("You have seccessfully registered!");
          resetForm();
        } catch (error) {
          const { message } = error as MyErrorType;
          toast.error(message);
          setLoader(false)
        }finally {
          setLoader(false)
        }
      }

   

      const handleClick = () => {
        setFormVisible(true)
    }

    return (
        <SupportFormik
      initialValues={{ name: "", email: "", password: "", phone: "" }}
      onSubmit={handleSubmit}
    >
      <Wrapper>
        <FormikForm>
        <ButtonReversForm onClick={handleClick} type="button">Go to resend verify</ButtonReversForm>
          <RegisterFormTitle>Registration form</RegisterFormTitle>
          <Label>
            Your name
            <InputField type="text" name="name" required  placeholder="Enter your name to register"/>
          </Label>

          <Label>
            Email address
            <InputField type="email" name="email" required  placeholder="Enter your email to register" autoComplete="off"/>
          </Label>

          <Label>
            Password
            <InputField type="password" name="password" required  placeholder="Create and enter password" autoComplete="off"/>
          </Label>

          <Label>
            Phone
            <InputField type="tel" name="phone" required placeholder="Enter your phone to register"/>
          </Label>

          <ButtonSubmit type="submit">Submit</ButtonSubmit>
          <DirectAnyForm>If you are registered, you can use the <NavDirect to="/login">login</NavDirect> form</DirectAnyForm>
        </FormikForm>
      </Wrapper>
    </SupportFormik>
    )
}

export default FormRegister