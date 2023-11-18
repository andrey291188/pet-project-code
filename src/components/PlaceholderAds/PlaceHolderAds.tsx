
import { PlaceHolderImg, PlaceHolderWrapper } from "./PlaceHolderAds.styled";

interface PlaceHolderAdsProps {
  img: string;
}

const PlaceHolderAds: React.FC<PlaceHolderAdsProps> = ({img}) => { 
  
  return (
    <PlaceHolderWrapper>
      <PlaceHolderImg src={img} alt="no ads" />
    </PlaceHolderWrapper>
  );
};

export default PlaceHolderAds;
