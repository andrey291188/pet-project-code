
import { PlaceHolderImg, PlaceHolderWrapper } from "./PlaceHolderAds.styled";


const PlaceHolderAds = ({img}: any) => { 
  
  return (
    <PlaceHolderWrapper>
      <PlaceHolderImg src={img} alt="no ads" />
    </PlaceHolderWrapper>
  );
};

export default PlaceHolderAds;
