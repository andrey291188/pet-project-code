
import { BuyItem, BuyList, BuyerInfoSection, TextItemBuyInfo, TitleBuyerInfo, TotalInfo } from "./PurchasesSalesInfo.styled";

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

interface DataProps {
    buyInfoData: Data[]
}

const PurchasesInfo: React.FC<DataProps> = ({buyInfoData}) => {

 const totalPriceAmount = buyInfoData.reduce((acc, {price}) => acc + price, 0)

  return (
    <BuyerInfoSection>
      <TitleBuyerInfo>History purchases</TitleBuyerInfo>
      <TotalInfo>Total purchases: <b>{buyInfoData.length}</b>, for the amount: <b>{totalPriceAmount}</b> USD</TotalInfo>
      <BuyList>
        {buyInfoData?.map(({_id, title, price, seller_name, seller_phone, seller_email}) => (<BuyItem key={_id}>
          <TextItemBuyInfo>You buy: {title}</TextItemBuyInfo>
          <TextItemBuyInfo>price: {price} USD</TextItemBuyInfo>
          <TextItemBuyInfo>Seller: {seller_name}</TextItemBuyInfo>
          <TextItemBuyInfo>Contact phone: +{seller_phone}</TextItemBuyInfo>
          <TextItemBuyInfo>Contact mail: {seller_email}</TextItemBuyInfo>
        </BuyItem>))}
      </BuyList>
    </BuyerInfoSection>
  );
};

export default PurchasesInfo;
