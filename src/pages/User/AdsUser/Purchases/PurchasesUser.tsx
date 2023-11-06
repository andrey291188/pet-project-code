import { useEffect, useState } from "react";
import PurchasesInfo from "../../../../components/PurchsesSalesInfo/PurchasesInfo";
import { getAllBuyer } from "../../../../service/buyRequest";
import { BuyerSection } from "./PurchasesUser.styled";
import { Loader } from "../../../../components/Loader/Loader";
import PlaceHolderAds from "../../../../components/PlaceholderAds/PlaceHolderAds";
import noBuysImg from "../../../../imgFolder/no_buys.jpg";

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

const BuyerUser = () => {
  const [buyInfoData, setBuyInfoData] = useState<Data[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  
  useEffect(() => {
    getRequest();
  }, []);

  const getRequest = async () => {
    setLoader(true);
    try {
      const {
        data: { result },
      } = await getAllBuyer();
      setBuyInfoData([...result]);
    } catch (error) {
      setLoader(false);
    } finally {
      setLoader(false);
    } };

  return (
    <BuyerSection>
      {loader && <Loader />}
      {!loader && buyInfoData.length > 0 ? <PurchasesInfo buyInfoData={buyInfoData}/> : <PlaceHolderAds img={noBuysImg}/>}
    </BuyerSection>
  );
};

export default BuyerUser;
