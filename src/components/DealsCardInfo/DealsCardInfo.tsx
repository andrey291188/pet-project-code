import {
    BuyerContainer,
    ContainerBuyerSeller,
  DealsCardList,
  ItemDealsCard,
  PriceDeals,
  SellerContainer,
  TextCardDeals,
  TitleDeals,
  TitleDealsCard,
  TotalInfo,
} from "./DealsCardInfo.styled";

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

interface DealsCardProps {
  dealsIfnoData: Data[];
}

const DealsCardInfo: React.FC<DealsCardProps> = ({ dealsIfnoData }) => {

    const totalPriceAmount = dealsIfnoData?.reduce((acc, {price}) => acc + price, 0)

  return (
    <>
    <TitleDealsCard>Transaction information</TitleDealsCard>
    <TotalInfo>Total deals: <b>{dealsIfnoData.length}</b>, for the amount: <b>{totalPriceAmount}</b> USD</TotalInfo>
    <DealsCardList>
      {dealsIfnoData?.map(
        ({
          _id,
          title,
          price,
          buyer_name,
          buyer_phone,
          buyer_email,
          seller_name,
          seller_phone,
          seller_email,
        }) => (
          <ItemDealsCard key={_id}>
            <TitleDeals>Title: {title}</TitleDeals>
            <PriceDeals>price: {price}</PriceDeals>
            <ContainerBuyerSeller>
              <BuyerContainer>
                <TextCardDeals>Buyer</TextCardDeals>
                <TextCardDeals>{buyer_name}</TextCardDeals>
                <TextCardDeals>+{buyer_phone}</TextCardDeals>
                <TextCardDeals>{buyer_email}</TextCardDeals>
              </BuyerContainer>
              <SellerContainer>
                <TextCardDeals>Seller</TextCardDeals>
                <TextCardDeals>{seller_name}</TextCardDeals>
                <TextCardDeals>+{seller_phone}</TextCardDeals>
                <TextCardDeals>{seller_email}</TextCardDeals>
              </SellerContainer>
            </ContainerBuyerSeller>
          </ItemDealsCard>
        )
      )}
    </DealsCardList>
    </>
  );
};

export default DealsCardInfo;
