import { useEffect, useState } from "react";
import PlaceHolderAds from "../../components/PlaceholderAds/PlaceHolderAds";
import { AdsSection, NoAdsUser } from "./AdsUser.styled";
import { Loader } from "../../components/Loader/Loader";
import { getAllAdsUser } from "../../service/adsRequest";
import AdsManagement from "../../components/AdsManagment/AdsManagement";
import noAdsImg from "../../imgFolder/istockphoto-906611618-1024x1024.jpg";

interface Data  {
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

const AdsUser = () => {
  const [adsData, setAdsData] = useState<Data[]>([])
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getRequest()
}, [])

const getRequest = async () => {
    setLoader(true);
    try {
        const {data: {result}} = await getAllAdsUser()
        setAdsData([...result])

    } catch (error) {
        setLoader(false);
    } finally {
        setLoader(false);
    }
}

  return (
    <AdsSection>
      {loader && <Loader />}
      
      {adsData.length === 0 && <NoAdsUser>You hav no advertisements</NoAdsUser>}
      {!loader && adsData.length > 0 ? <AdsManagement dataCard={adsData} getRequest={getRequest}/> : 
            <PlaceHolderAds img={noAdsImg} />}
    </AdsSection>
  );
};

export default AdsUser;
