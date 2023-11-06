
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
    sellInfoData: Data[]
}

const SalesInfo: React.FC<DataProps> = ({sellInfoData}) => {

 const totalPriceAmount = sellInfoData.reduce((acc, {price}) => acc + price, 0)

  return (
    <BuyerInfoSection>
      <TitleBuyerInfo>Sales history</TitleBuyerInfo>
      <TotalInfo>Total sales: <b>{sellInfoData.length}</b>, for the amount: <b>{totalPriceAmount}</b></TotalInfo>
      <BuyList>
        {sellInfoData?.map(({_id, title, price, buyer_name, buyer_phone, buyer_email}) => (<BuyItem key={_id}>
          <TextItemBuyInfo>You sell: {title}</TextItemBuyInfo>
          <TextItemBuyInfo>price: {price} USD</TextItemBuyInfo>
          <TextItemBuyInfo>Buyer: {buyer_name}</TextItemBuyInfo>
          <TextItemBuyInfo>Contact phone: +{buyer_phone}</TextItemBuyInfo>
          <TextItemBuyInfo>Contact mail: {buyer_email}</TextItemBuyInfo>
        </BuyItem>))}
      </BuyList>
    </BuyerInfoSection>
  );
};

export default SalesInfo;
