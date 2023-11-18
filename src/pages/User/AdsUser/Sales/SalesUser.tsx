import { useEffect, useState } from "react";
import { getAllSeller } from "../../../../service/buyRequest";
import SalesInfo from "../../../../components/PurchsesSalesInfo/SalesInfo";
import { Loader } from "../../../../components/Loader/Loader";
import PlaceHolderAds from "../../../../components/PlaceholderAds/PlaceHolderAds";
import noSellsImg from "../../../../imgFolder/no_sellers.png";
import { SellerSection } from "./SalesUser.styled";


interface Data {
  buyer_email: string;
  buyer_id: string;
  buyer_name: string;
  buyer_phone: number;
  createdAt: string;
  price: number;
  seller_email: string;
  seller_id: string;
  seller_name: string;
  seller_phone: number;
  title: string;
  updatedAt: string;
  _id: string;
}

const SellerUser = () => {
  const [sellInfoData, setSellInfoData] = useState<Data[]>([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getRequest();
  }, []);

  const getRequest = async () => {
    setLoader(true);
    try {
      const {
        data: { result },
      } = await getAllSeller();
      setSellInfoData([...result]);
    } catch (error) {
      setLoader(false);
    } finally {
      setLoader(false);
    } };


    return (
      <SellerSection>
      {loader && <Loader />}
      {!loader && sellInfoData.length > 0 ? <SalesInfo sellInfoData={sellInfoData}/> : <PlaceHolderAds img={noSellsImg}/>}
    </SellerSection>
    );
  };
  
  export default SellerUser;