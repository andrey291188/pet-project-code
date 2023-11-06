import { useRef, useState } from "react";
import {
  ButtonSubmit,
  DescImage,
  FormikForm,
  InputField,
  RegisterFormTitle,
  SupportFormik,
  Wrapper,
} from "../FormAddFotoAds/FormAddFotoAds.styled";
import { toast } from "react-toastify";
import FotoAddGalleryBox from "../FotoAddGalleryBox/FotoAddGalleryBox";
import { addFotoAds } from "../../service/adsRequest";
import { Loader } from "../Loader/Loader";

interface FormAddFotoAdsProps {
  getRequest: () => void;
  showModal: (boolean: boolean) => void;
  idAds: string;
}

const FormEditFotoAds: React.FC<FormAddFotoAdsProps> = ({
  getRequest,
  showModal,
  idAds,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [indexElement, setIndexElement] = useState<number>(0);
  const filePicker = useRef<HTMLInputElement | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const showFile = selectedFiles[indexElement];

  const handlePick = () => {
    if (filePicker.current) {
      filePicker.current.click();
    }
  };

  const handleChange = async (e: any) => {
    if (!e.target || !e.target.files || e.target.files.length === 0) {
      return;
    }
    
    if (selectedFiles.length >= 4) {
      toast.error("You have reached the maximum number of images");
      return;
    }
    const file = e.target.files[0];
    const name = file.name;
    const lastModified = file.lastModified;

    const filteredData = selectedFiles.find(
      (file) => file.name === name && file.lastModified === lastModified
    );
    if (filteredData) {
      toast.error("You have already added this image");
      return;
    }

    setSelectedFiles((prev) => {
      return [...prev, file];
    });

    if (selectedFiles.length > 0) {
      setIndexElement((prev) => prev + 1);
    }
  };

  const handleSubmit = async (values: any) => {
    setLoader(true);
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("fotoAds", file);
    });
    try {
      await addFotoAds(idAds, formData);
      toast.success("Seccessfully added");
    } catch (error: any) {
      toast.warning(error.message);
      setLoader(false);
    } finally {
      getRequest();
      setLoader(false);
    }

    showModal(false);
  };

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <Wrapper>
          <SupportFormik initialValues={{ foto: [] }} onSubmit={handleSubmit}>
            <FormikForm>
              <RegisterFormTitle>Form add image advert</RegisterFormTitle>

              {selectedFiles.length === 0 ? (
                <DescImage>No image</DescImage>
              ) : (
                <FotoAddGalleryBox
                  selectedFiles={selectedFiles}
                  indexElement={indexElement}
                  setIndexElement={setIndexElement}
                  setSelectedFiles={setSelectedFiles}
                  showFile={showFile}
                />
              )}

              <InputField
                ref={filePicker}
                name="foto"
                type="file"
                onChange={handleChange}
                accept="image/*, .png, .jpg,"
              />
              <ButtonSubmit type="button" onClick={handlePick}>
                Add
              </ButtonSubmit>
              <ButtonSubmit type="submit">Submit</ButtonSubmit>
            </FormikForm>
          </SupportFormik>
        </Wrapper>
      )}
    </>
  );
};

export default FormEditFotoAds;
