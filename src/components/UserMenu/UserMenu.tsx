import { useState, MouseEvent } from "react";
import {  AvatarUser, MenuUserButton, UserMenuWrapper } from "./UserMenu.styled";
import { RootStore, useAppDispatch } from "../../store/store";
import { logOutThunk } from "../../store/authorization/thunkAuth";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import FormCreateAds from "../FormCreateAds/FormCreateAds";
import FormAddFotoAds from "../FormAddFotoAds/FormAddFotoAds";
import DropMenu from "./DropMenu";
import AvatarUpdate from "../AvatarUpdate/AvatarUpdate";
import { useNavigate } from "react-router-dom";

type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

const authSelector = (state: RootStore) => {
  return state.auth as { user: string, avatar: string};
};

const UserMenu: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [imgForm, setImgForm] = useState<boolean>(false);
  const [avatarModal, setAvatarModal] = useState<boolean>(false)
  const [idAds, setIdAds] = useState("");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  
  const {user, avatar} = useSelector(authSelector)


  const toggleModal = () => {
    setShowModal(!showModal)
    setMenuActive(false);
    if(imgForm) {
      setImgForm(!imgForm)
    }
   };

   const toggleModalAvatar = () => {
    setAvatarModal(!avatarModal)
   };
  
  const handleLogOut = () => {
     dispatch(logOutThunk({token: null}))
     navigate("/")
    }

  const handleMenuClick: ClickHandler = (event) => {
    setMenuActive(!menuActive);
  };

  const backdropClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) {
      setMenuActive(!menuActive);
    }
  };

  return (
    <>
    <UserMenuWrapper>
      <AvatarUser src={avatar} alt="" onClick={toggleModalAvatar}/>
      <MenuUserButton type="button" $active={menuActive ? menuActive.toString() : undefined} onClick={handleMenuClick}>Hi, {user}</MenuUserButton>
      {menuActive && <DropMenu handleLogOut={handleLogOut} backdropClick={backdropClick} toggleModal={toggleModal} setMenuActive={setMenuActive}/>
      }
    </UserMenuWrapper>
    {showModal && (<Modal toggleModal={toggleModal}>
      {imgForm ? <FormAddFotoAds idAds={idAds} statusForm={setImgForm} showModal={setShowModal}/> : <FormCreateAds setIdAds={setIdAds} statusForm={setImgForm}/>}
      </Modal >)}
      {avatarModal && <Modal toggleModal={toggleModalAvatar}>
        <AvatarUpdate toggleModal={toggleModalAvatar}/>
        </Modal >}
    </>
  );
};

export default UserMenu;
