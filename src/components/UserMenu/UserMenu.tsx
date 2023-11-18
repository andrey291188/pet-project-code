import { useState } from "react";
import {  AvatarUser, MenuUserButton, UserMenuWrapper } from "./UserMenu.styled";
import { RootStore, useAppDispatch, useAppSelector } from "../../store/store";
import { logOutThunk } from "../../store/authorization/thunkAuth";
import Modal from "../Modal/Modal";
import FormCreateAds from "../FormCreateAds/FormCreateAds";
import FormAddFotoAds from "../FormAddFotoAds/FormAddFotoAds";
import DropMenu from "./DropMenu";
import AvatarUpdate from "../AvatarUpdate/AvatarUpdate";
import { useNavigate } from "react-router-dom";

const authSelector = (state: RootStore) => {
  return state.auth as { user: string, avatar: string};
};

const UserMenu: React.FC = () => {
  const {user, avatar} = useAppSelector(authSelector)
  
  const [showModal, setShowModal] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [imgForm, setImgForm] = useState(false);
  const [avatarModal, setAvatarModal] = useState(false)
  const [idAds, setIdAds] = useState("");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  


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

  const handleMenuClick = (e: React.MouseEvent<HTMLElement>) => {
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
