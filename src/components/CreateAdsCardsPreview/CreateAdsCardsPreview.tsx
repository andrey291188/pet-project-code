import {
  AdsList,
  FavoritButton,
  ImageItem,
  ItemCard,
  PriceItem,
  TitleItem,
} from "./CreateAdsCardsPreview.styled";
import { Link, useLocation } from "react-router-dom";
import img from "../../imgFolder/Placeholder-1.png";
import { RootStore, useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import { createFavorite, deleteFavorit } from "../../store/favorite/favoriteReducer";
import { AiTwotoneStar } from "react-icons/ai"

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

interface CreateAdsCardsPreviewProps {
  dataCard: AdCard[];
}

export const defaultImg = img;

const authSelector = (state: RootStore) => {
  return state.favorite as { favoriteList: AdCard[] };
};

const CreateAdsCardsPreview = ({ dataCard }: CreateAdsCardsPreviewProps) => {
  const { favoriteList } = useSelector(authSelector);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const obJectIncluded = (id: string) => {
      return favoriteList.some(({ _id }) => _id === id)
  };
  
  const handleAddFavorite = (id: string) => {
    const [data] = dataCard.filter(({ _id }) => _id === id);
    dispatch(createFavorite(data));
  };

  const handleDeleteFavorite = (id: string) => {
    dispatch(deleteFavorit(id))
  }

  return (
    <AdsList>
      {dataCard?.map(({ _id, title, price, fotoAds }) => (
        <ItemCard key={_id}>
              { !obJectIncluded(_id) ?
                <FavoritButton onClick={() => {handleAddFavorite(_id)}}
                  type="button">
                  <AiTwotoneStar size={24}/>
                </FavoritButton> :
                <FavoritButton onClick={() => {handleDeleteFavorite(_id)}}
                type="button">
                <AiTwotoneStar size={24} color="orange"/>
              </FavoritButton>
              }
          <Link to={`${_id}`} state={{ from: location }}>
            <ImageItem
              src={fotoAds && fotoAds.length !== 0 ? fotoAds[0] : defaultImg}
              alt={title}
            />
          </Link>
          <TitleItem>{title}</TitleItem>
          <PriceItem>Price: {price} USD</PriceItem>
        </ItemCard>
      ))}
    </AdsList>
  );
};

export default CreateAdsCardsPreview;


