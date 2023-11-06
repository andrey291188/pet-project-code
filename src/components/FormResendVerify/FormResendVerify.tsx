import { toast } from "react-toastify";
import { ButtonReversForm, ButtonSubmit, FormikForm, InputField, Label,  RegisterFormTitle, SupportFormik, Wrapper } from "../../pages/User/RegisterLogin.styled"
import { repeatSendVerify } from "../../service/authRequest";

interface RegisterUser {
    email: string;
  }

  interface FormRegisterProps {
    setLinkVerify: (boolean: string) => void;
    setFormVisible: (value: boolean) => void;
    setLoader: (value: boolean) => void
  }

const FormResendVerify: React.FC<FormRegisterProps> = ({setLinkVerify, setFormVisible, setLoader}) => {
  
    const handleSubmit = async (values: RegisterUser, { resetForm }: any) => {
      setLoader(true)
        try {
          const { data: {confirm_email} } = await repeatSendVerify(values)
          setLinkVerify(`${confirm_email}`)
          toast.success("Request sent successfully");
          resetForm()
        } catch (error: any) {
          toast.error(error.message);
          setLoader(false)
        } finally {
          setLoader(false)
        }
      }

    const handleClick = () => {
        setFormVisible(false)
    }
    return (
        <SupportFormik
      initialValues={{ email: "" }}
      onSubmit={handleSubmit}
    >
      <Wrapper>
        <FormikForm>
        <ButtonReversForm onClick={handleClick} type="button">Go to register</ButtonReversForm>
          <RegisterFormTitle>Resend verify form</RegisterFormTitle>

          <Label>
            Email address
            <InputField type="email" name="email" required  placeholder="Enter your email" autoComplete="off"/>
          </Label>

          <ButtonSubmit type="submit">Submit</ButtonSubmit>
        </FormikForm>
      </Wrapper>
    </SupportFormik>
    )
}

export default FormResendVerify