import { RootStore } from "../../store/store";
import { useSelector } from "react-redux";
import PlaceHolderAds from "../../components/PlaceholderAds/PlaceHolderAds";
import CreateAdsCardsPreview from "../../components/CreateAdsCardsPreview/CreateAdsCardsPreview";
import { FavoriteSection, NoAdsFavorite } from "./Favorite.styled";
import noAdsImg from "../../imgFolder/istockphoto-906611618-1024x1024.jpg";

interface AdCard {
  active: boolean;
  description: string;
  fotoAds: string[] | null;
  owner: string;
  price: number;
  title: string;
  updatedAt: string;
  views: number;
  _id: string;
}

const authSelector = (state: RootStore) => {
  return state.favorite as { favoriteList: AdCard[] };
};

const Favorite = () => {
  const { favoriteList } = useSelector(authSelector);

  return (
    <FavoriteSection>
    
      {favoriteList.length === 0 && <NoAdsFavorite>You have no favorite advertisements</NoAdsFavorite>}
      { favoriteList.length > 0 ? (
        <CreateAdsCardsPreview dataCard={favoriteList} />
      ) : (
        <PlaceHolderAds img={noAdsImg} />
      )}
    </FavoriteSection>
  );
};

export default Favorite;
