import { toast } from "react-toastify";
import { createAdsUser } from "../../service/adsRequest";
import { ButtonSubmit, FormikForm, InputField, InputFieldDesc, Label, RegisterFormTitle, SupportFormik, Wrapper  } from "./FormCreatedAds.styled";
import { Loader } from "../Loader/Loader";
import { useState } from "react";
import { RootStore, useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import { createAdsDescription, createAdsPrice, createAdsTitle, resetState } from "../../store/createAds/createAdsReducer";
import { MyErrorType } from "store/authorization/thunkAuth";

interface FormCreateAdsProps {
  statusForm: (boolean: boolean) => void;
  setIdAds: (id: string) => void
}

const authSelector = (state: RootStore) => {
  return state.createAds as { title: string, price: number | string, description: string};
};

const FormCreateAds: React.FC<FormCreateAdsProps> =  ({statusForm, setIdAds}) => {
  const {title, price, description} = useSelector(authSelector)
  const dispatch = useAppDispatch()
  const [loader, setLoader] = useState(false);

    const handleSubmit = async () => {
    
        setLoader(true)
        try {
          const createAds = await createAdsUser({title, price, description})
          setIdAds(createAds.data.result._id)
          toast.success("Seccessfully created")
        } catch (error) {
          const { message } = error as MyErrorType;
          toast.warn(message)
          setLoader(false)
          return
        } finally {
          setLoader(false)
        }
        statusForm(true)
        dispatch(resetState())
      };

      const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {

         const {name, value} = e.target

         switch (name) {
          case "title":
            dispatch(createAdsTitle(value));
            break;
          case "price":
            dispatch(createAdsPrice(value));
            break;
          case "description":
            dispatch(createAdsDescription(value))
            break;
          default:
            return
         }
       
      }

      return (
        <>
        {loader && <Loader/>}
        {!loader && <SupportFormik
        initialValues={{ title: "", price: "", description: "" }}
        onSubmit={handleSubmit}
        >
      <Wrapper>
        <FormikForm>
          <RegisterFormTitle>Form add advert</RegisterFormTitle>

          <Label>
            Title
            <InputField type="text" name="title" required  placeholder="Enter title" value={title} onChange={handleChangeInput}/>
          </Label>

          <Label>
            Price
            <InputField type="tel" name="price" required placeholder="Enter price" value={price} onChange={handleChangeInput}/>
          </Label>

          <Label>
            Description 
            <InputFieldDesc type="text" as="textarea" name="description" required  placeholder="Enter description" value={description} onChange={handleChangeInput}/>
          </Label>

          <ButtonSubmit type="submit">Next</ButtonSubmit>
    
        </FormikForm>
   
      </Wrapper>
    </SupportFormik>}
    </>
      )
      
  };
  
  export default FormCreateAds;