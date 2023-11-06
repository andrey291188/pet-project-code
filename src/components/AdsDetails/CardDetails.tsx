import { useSelector } from "react-redux";
import { defaultImg } from "../CreateAdsCardsPreview/CreateAdsCardsPreview";
import { RootStore } from "../../store/store";
import {
    ItemAdsDetails,
    ListAdsDetails,
    PriceAdsDetails,
    TitleAdsDetails,
    WrapperAdsDetails,
    UserWraperAdsDetails,
    ImageAdsDetails,
    AvatarUserAdsDetails,
    UserNameAdsDetails,
    ListContactAdsDetails,
    TitleListContactAdsDetails,
    ItemContactAdsDetails,
    LinkContactAdsDetails,
    DescAdsDetails,
    ViewsAdsDetails,
    CenteringWrap,
    ButtonBuy,
    
  
  } from "./AdsDetails.styled";
import { toast } from "react-toastify";
import { getBuyById } from "../../service/buyRequest";
import { Loader } from "../Loader/Loader";
import { useState } from "react";

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

  interface DataProps {
    data: Data;
    toggleModal: () => void
  }

  const authSelector = (state: RootStore) => {
    return state.auth as { email: string };
  };

const CardDetails = ({data, toggleModal}: DataProps) => {
  const { email } = useSelector(authSelector);
  const [loader, setLoader] = useState<boolean>(false)
  const { _id, price, title, fotoAds, owner, description, views} = data
  
  
  const handleBuyClick = async () => {
    if(email === owner.email) {
      toast.warn("You can't buy from yourself")
      return
    }
    try {
      setLoader(true)
       await getBuyById(_id)
       toast.success("The purchase was completed succesfully, contact the seller if you would like to confirm the order faster")
    } catch (error: any ) {
      setLoader(false)
      toast.warning(error.message)
    } finally {
      setLoader(false)
    }
  }
  
    return (
        <WrapperAdsDetails>
        <ListAdsDetails>
          <CenteringWrap>
          <ItemAdsDetails>
            <TitleAdsDetails>{title}</TitleAdsDetails>
            <ImageAdsDetails src={fotoAds && fotoAds.length !== 0 ? fotoAds[0] : defaultImg} alt={title} onClick={toggleModal}/>
          </ItemAdsDetails>
          <ItemAdsDetails>
            <PriceAdsDetails>Price: {price} USD</PriceAdsDetails>
            <UserWraperAdsDetails>
              <AvatarUserAdsDetails src={owner.avatarURL || defaultImg} alt={owner.name} />
              <UserNameAdsDetails>Author: {owner.name}</UserNameAdsDetails>
              <ListContactAdsDetails>
                <TitleListContactAdsDetails>
                  Contacts
                </TitleListContactAdsDetails>
                <ItemContactAdsDetails>
                  <LinkContactAdsDetails href={`tel:+${owner.phone}`}>
                    +{owner.phone}
                  </LinkContactAdsDetails>
                </ItemContactAdsDetails>
                <ItemContactAdsDetails>
                  <LinkContactAdsDetails href={`mailto:${owner.email}`}>
                     {owner.email}
                  </LinkContactAdsDetails>
                </ItemContactAdsDetails>
              </ListContactAdsDetails>
            </UserWraperAdsDetails>
          </ItemAdsDetails>
          </CenteringWrap>
          <ButtonBuy type="button" onClick={handleBuyClick}>Buy</ButtonBuy>
          <div>
          <DescAdsDetails>{description}</DescAdsDetails>
          <ViewsAdsDetails>Views: {views}</ViewsAdsDetails>
          </div>
        </ListAdsDetails>
        {loader && <Loader/>}
      </WrapperAdsDetails>
    )
}

export default CardDetails