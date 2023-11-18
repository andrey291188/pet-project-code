import {
  AdsDetailsSection,
  WrapperOtherAdsDetail,
  TitleOtherAdsDetail,
  ButtonGoBack,

} from "./AdsDetails.styled";
import CreateAdsCardsPreview from "../CreateAdsCardsPreview/CreateAdsCardsPreview";
import { useLocation, useParams } from "react-router-dom";
import { useEffect,  useRef,  useState } from "react";
import { getAdsById, getAllAdsUserById } from "../../service/adsRequest";
import CardDetails from "./CardDetails";
import { Loader } from "../Loader/Loader";
import Modal from "../Modal/Modal";
import ImageGallery from "../ImageGallery/ImageGallery";
import { MyErrorType } from "store/authorization/thunkAuth";
import { toast } from "react-toastify";

interface User {
  _id: string;
  name: string;
  email: string;
  phone: number;
  avatarURL: string;

}
interface Data  {
  active: boolean;
  description: string;
  fotoAds: string[] | null;
  owner: User;
  price: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  views: number;
  _id: string
}

interface DataAds  {
  active: boolean;
  description: string;
  fotoAds: string[] | null;
  owner: string;
  price: number;
  title: string;
  updatedAt: string;
  views: number;
  _id: string
}

const AdsDetails = () => {
  const [detailsAdsData, setDetailsAdsData] = useState<Data>();
  const [adsData, setAdsData] = useState<DataAds[]>([]);
  const [loader, setLoader] = useState(false);
  const [imgDetails, setImgDetails] = useState(false)
  const { adsID } = useParams();
  const location = useLocation();
  const backLocationRefs = useRef(location.state?.from ?? "/ads")
  
  

  useEffect(() => {
    if (adsID) {
      getRequest(adsID);
    }
}, [adsID])

const getRequest = async (id: string) => {
  setLoader(true);
  try {
      const {data: {data: {result: detalsAds}}} = await getAdsById(id)
      setDetailsAdsData(detalsAds)
      const {owner:{ _id}} = detalsAds
 
      const {data: {result}} = await getAllAdsUserById(_id)
      setAdsData([...result])

  } catch (error) {
    const { message } = error as MyErrorType;
          toast.error(message);
      setLoader(false);
  } finally {
      setLoader(false);
  }
}

const toggleModal = () => {
   setImgDetails(!imgDetails)
 };

  return (
    <AdsDetailsSection>
      <ButtonGoBack to={backLocationRefs.current}>
        Go Back
      </ButtonGoBack>
      {loader && <Loader/>}
      {detailsAdsData && <CardDetails data={detailsAdsData} toggleModal={toggleModal}/>}
      {true && <WrapperOtherAdsDetail>
        <TitleOtherAdsDetail>Other advertisements by the author</TitleOtherAdsDetail>
        <CreateAdsCardsPreview dataCard={adsData}/>
      </WrapperOtherAdsDetail>}
      { detailsAdsData && imgDetails && <Modal toggleModal={toggleModal}>
        <ImageGallery data={detailsAdsData.fotoAds}/>
        </Modal>}
    </AdsDetailsSection>
  );
};

export default AdsDetails;
