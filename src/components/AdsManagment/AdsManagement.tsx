import {
  AdsList,
  ButtonActiveOption,
  ButtonChangeOption,
  ButtonWrapper,
  DescItem,
  ImageItem,
  ItemCard,
  PriceItem,
  TitleItem,
  ViewsCounter,
  ViewsResetCounter,
  ViewsWrapper,
  WrapperInfoAds,
} from "./AdsManagement.styled";
import { defaultImg } from "../CreateAdsCardsPreview/CreateAdsCardsPreview";
import Modal from "../Modal/Modal";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useState } from "react";
import { Loader } from "../Loader/Loader";
import { toast } from "react-toastify";
import {
  deleteAds,
  resetViewsAds,
  reversActiveAds,
} from "../../service/adsRequest";
import FormEditFotoAds from "../FormEditFotoAds/FormEditFotoAds";
import FormEditAds from "../FormEditAds/FormEditAds";
import { MyErrorType } from "store/authorization/thunkAuth";

export interface AdCard {
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
  getRequest: () => {};
}

const AdsManagement = ({
  dataCard,
  getRequest,
}: CreateAdsCardsPreviewProps) => {
  const [indexElement, setIndexElement] = useState<number | null>(null);
  const [imageView, setImageView] = useState(false);
  const [loader, setLoader] = useState(false);
  const [editImageModal, setEditImageModal] = useState(false);
  const [editDataModal, setEditDataModal] = useState(false);
  const [idAds, setIdAds] = useState("");

  const editData = dataCard.filter(({_id}) => _id === idAds)

  const handleDataIndex = (index: number) => {
    setIndexElement(index);
    setImageView(!imageView);
  };

  const toggleModal = () => {
    setImageView(!imageView);
  };

  const toggleEditImageModal = () => {
    setEditImageModal(!editImageModal);
  };

  const toggleEditDataModal = () => {
    setEditDataModal(!editDataModal);
  };

  const getOption = (option: string, id: string) => {
    switch (option) {
      case "reset":
        requestWrapper(resetViewsAds, id, "Reset ads views success");
        break;
      case "active":
        requestWrapper(reversActiveAds, id, "Operation success");
        break;
      case "delete":
        requestWrapper(deleteAds, id, "Delete ads success");
        break;
      case "edit":
        setIdAds(id);
        toggleEditDataModal();
        break;
      case "change foto":
        setIdAds(id);
        toggleEditImageModal();
        break;
      default:
        return;
    }
  };

  const requestWrapper = async (
    requestFunction: (id: string) => {},
    id: string,
    successMessage: string
  ) => {
    try {
      setLoader(true);
      const response = await requestFunction(id);
      getRequest();
      if (successMessage) {
        toast.success(successMessage);
      }
      return response;
    } catch (error) {
      const { message } = error as MyErrorType;
      toast.error("An error occurred: " + message);
      setLoader(false);
    } finally {
      setLoader(false);
    }
  };

  return (
    <AdsList>
      {dataCard?.map(
        ({ _id, title, price, fotoAds, description, views, active }, index) => (
          <ItemCard key={_id}>
            <ImageItem
              src={fotoAds && fotoAds.length !== 0 ? fotoAds[0] : defaultImg}
              alt={title}
              onClick={() => handleDataIndex(index)}
            />
            <WrapperInfoAds>
              <TitleItem>Title: {title}</TitleItem>
              <PriceItem>Price: {price} USD</PriceItem>
              <DescItem>{description}</DescItem>
              <ViewsWrapper>
                <ViewsCounter>Views: {views}</ViewsCounter>
                <ViewsResetCounter
                  onClick={() => {
                    getOption("reset", _id);
                  }}
                >
                  reset
                </ViewsResetCounter>
              </ViewsWrapper>
              <ButtonWrapper>
                <ButtonChangeOption
                  onClick={() => {
                    getOption("edit", _id);
                  }}
                >
                  edit ad
                </ButtonChangeOption>
                <ButtonChangeOption
                  onClick={() => {
                    getOption("change foto", _id);
                  }}
                >
                  change foto
                </ButtonChangeOption>
                <ButtonActiveOption
                  onClick={() => {
                    getOption("active", _id);
                  }}
                  $active={active ? active.toString() : undefined}
                >
                  {active ? "active" : "not active"}
                </ButtonActiveOption>
                <ButtonChangeOption
                  onClick={() => {
                    getOption("delete", _id);
                  }}
                >
                  delete
                </ButtonChangeOption>
              </ButtonWrapper>
            </WrapperInfoAds>
          </ItemCard>
        )
      )}
      {imageView && indexElement !== null && (
        <Modal toggleModal={toggleModal}>
          <ImageGallery data={dataCard[indexElement].fotoAds} />
        </Modal>
      )}
      {loader && (
        <Modal>
          <Loader />
        </Modal>
      )}
      {editImageModal && (
        <Modal toggleModal={toggleEditImageModal}>
          <FormEditFotoAds
            showModal={toggleEditImageModal}
            idAds={idAds}
            getRequest={getRequest}
          />
        </Modal>
      )}
      {editDataModal && (
        <Modal toggleModal={toggleEditDataModal}>
          <FormEditAds
            statusForm={toggleEditDataModal}
            idAds={idAds}
            getRequest={getRequest}
            editData={editData}
          />
        </Modal>
      )}
    </AdsList>
  );
};

export default AdsManagement;
