import { toast } from "react-toastify";
import { updateAdsUser } from "../../service/adsRequest";
import { ButtonSubmit, FormikForm, InputField, InputFieldDesc, Label, RegisterFormTitle, SupportFormik, Wrapper  } from "../FormCreateAds/FormCreatedAds.styled";
import { Loader } from "../Loader/Loader";
import { useEffect, useState } from "react";

interface Data {
  active: boolean;
  description: string;
  fotoAds: string[] | null;
  owner: string;
  price: number;
  title: string;
  updatedAt: string;
  views: number;
  _id: string;
}

interface FormCreateAdsProps {
  statusForm: (boolean: boolean) => void;
  getRequest: () => {}
  idAds: string
  editData: Data[]
}
const FormEditAds: React.FC<FormCreateAdsProps> =  ({getRequest, statusForm, idAds, editData}) => {
  const [loader, setLoader] = useState(false);
  const [editTitle, setEditTitle] = useState<string>("")
  const [editPrice, setEditPrice] = useState<number | null>(null)
  const [editDescription, setEditDescription] = useState<string>("")
  const {title, price, description} = editData[0]

  useEffect(()=>{
    setEditTitle(title);
    setEditPrice(price);
    setEditDescription(description)
  }, [title, price, description])

    const handleSubmit = async () => {
    
        setLoader(true)
        try {
          await updateAdsUser(idAds, {title: editTitle, description: editDescription, price: editPrice})
          toast.success("Seccessfully created")
        } catch (error: any) {
          toast.warn(error.message)
          setLoader(false)
          return
        } finally {
            getRequest()
          setLoader(false)
        }
        statusForm(false)
      };

      const handleChangeInput = (e:any) => {
        const {name, value} = e.target
        
        switch (name) {
          case "title":
            setEditTitle(value);
            break;
          case "price":
            setEditPrice(value);
            break;
          case "description":
            setEditDescription(value);
            break;
          default:
            return
         }
      }

      return (
        <>
        {loader && <Loader/>}
        {!loader && <SupportFormik
        initialValues={{ title: "", price: "" }}
        onSubmit={handleSubmit}
        >
      <Wrapper>
        <FormikForm>
          <RegisterFormTitle>Form add advert</RegisterFormTitle>
          <Label>
            Title
            <InputField type="text" name="title" required  placeholder="Enter title" value={editTitle} onChange={handleChangeInput}/>
          </Label>
          <Label>
            Price
            <InputField type="tel" name="price" required placeholder="Enter price" value={editPrice} onChange={handleChangeInput}/>
          </Label>
          <Label>
            Description 
            <InputFieldDesc type="text" as="textarea" name="description" required  placeholder="Enter description" value={editDescription} onChange={handleChangeInput}/>
          </Label>
          <ButtonSubmit type="submit">Submit</ButtonSubmit>
        </FormikForm>
      </Wrapper>
    </SupportFormik>}
    </>
      )
  };
  
  export default FormEditAds;