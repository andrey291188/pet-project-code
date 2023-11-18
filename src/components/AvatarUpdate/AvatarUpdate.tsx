import { useRef, useState } from "react";
import {
  AvatarUpdateWrapper,
  Button,
  DescImage,
  FotoAds,
  InputField,
} from "./AvatarUpdate.styled";

import { toast } from "react-toastify";

import { useAppDispatch } from "../../store/store";
import { updateAvatarThunk } from "../../store/authorization/thunkAuth";

interface AvatarUpdateProps {
  toggleModal: (boolean: boolean) => void;
}

const AvatarUpdate: React.FC<AvatarUpdateProps> = ({ toggleModal }) => {
  const [selectedFiles, setSelectedFiles] = useState<File>();
  const filePicker = useRef<HTMLInputElement | null>(null);


  const dispatch = useAppDispatch();

  const handlePick = () => {
    if (filePicker.current) {
      filePicker.current.click();
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFiles(file);
  };

  const handleSubmit = async (values: React.FormEvent<HTMLFormElement>) => {
    values.preventDefault();
    if (selectedFiles === undefined) {
        toast.warn("Choose an image")
      return
    }

    const formData = new FormData();
    if (selectedFiles) {
      formData.append("avatar", selectedFiles);
    }

    dispatch(updateAvatarThunk(formData))
 
    toggleModal(false);
  };

  return (
      
        <AvatarUpdateWrapper onSubmit={handleSubmit}>
          {selectedFiles === undefined ? (
            <DescImage>No image</DescImage>
          ) : (
            <FotoAds src={URL.createObjectURL(selectedFiles)} alt="avatar" />
          )}
          <InputField
            ref={filePicker}
            name="foto"
            type="file"
            onChange={handleChange}
            accept="image/*, .png, .jpg,"
          />
          <Button type="button" onClick={handlePick}>
            Add
          </Button>
          <Button type="submit">Submit</Button>
        </AvatarUpdateWrapper>
      
    
  );
};

export default AvatarUpdate;
