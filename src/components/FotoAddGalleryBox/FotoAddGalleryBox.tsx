import {
  BtnDelete,
  BtnPagContainer,
  FotoAds,
  ImgContainer,
  ItemIndex,
  PaginationBtn,
  WrapperFoto,
} from "./FotoAddGallaryBox.styled";

interface FotoGalleryBoxProps {
    selectedFiles: File[];
    indexElement: number;
    setIndexElement: (index: number) => void;
    setSelectedFiles: (files: File[]) => void;
    showFile: File;
  }

const FotoGalleryBox: React.FC<FotoGalleryBoxProps> = ({
  selectedFiles,
  indexElement,
  setIndexElement,
  setSelectedFiles,
  showFile,
}) => {
  const changeIndexItem = (value: number) => {
    if (!selectedFiles) return;

    if (indexElement + value < 0) {
      setIndexElement(selectedFiles.length - 1);
    } else if (indexElement + value >= selectedFiles.length) {
      setIndexElement(0);
    } else {
      setIndexElement(indexElement + value);
    }
  };

  const onDelete = (id: number) => {
    const newFiles = selectedFiles.filter((file: File) => file.lastModified !== id);
    setSelectedFiles(newFiles);
    setIndexElement(0);
  };

  return (
    <WrapperFoto>
     
        <ImgContainer key={showFile.lastModified}>
          <FotoAds
            src={URL.createObjectURL(showFile)}
            alt={`Uploaded Photos ${indexElement}`}
            width="240"
          />
          <BtnDelete
            type="button"
            onClick={() => onDelete(showFile.lastModified)}
          >
            delete
          </BtnDelete>
        </ImgContainer>
    
      {selectedFiles.length > 1 && (
        <BtnPagContainer>
          <PaginationBtn type="button" onClick={() => changeIndexItem(-1)}>
            prev
          </PaginationBtn>
          <ItemIndex>{indexElement + 1}</ItemIndex>
          <PaginationBtn type="button" onClick={() => changeIndexItem(1)}>
            next
          </PaginationBtn>
        </BtnPagContainer>
      )}
    </WrapperFoto>
  );
};

export default FotoGalleryBox;
