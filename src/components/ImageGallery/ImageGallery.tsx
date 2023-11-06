import { useState } from "react";
import { BtnPagContainer, FotoAds, ImageGalleryWrapper, ImgContainer, ItemIndex, PaginationBtn } from "./ImageGallery.styled";
import { defaultImg } from "../CreateAdsCardsPreview/CreateAdsCardsPreview";

interface ImageGalleryProps {
    data: string[] | null;
  }

const ImageGallery: React.FC<ImageGalleryProps> = ({data}) => {
    const [indexElement, setIndexElement] = useState<number>(0)
    const showImg = data !== null && data.length !== 0 ? data[indexElement] : defaultImg
    
    const changeIndexItem = (value: number) => {

        if (data === null) return;
    
        if (indexElement + value < 0) {
          setIndexElement(data.length - 1);
        } else if (indexElement + value >= data.length) {
          setIndexElement(0);
        } else {
          setIndexElement(indexElement + value);
        }
      };

    return (
        <ImageGalleryWrapper>

        <ImgContainer key={showImg}>
          <FotoAds
            src={showImg}
            alt={`Uploaded Photos ${indexElement}`}
            width="240"
          />
        </ImgContainer>
    
      {data && data.length > 1 && (
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
        </ImageGalleryWrapper>
    )
}

export default ImageGallery