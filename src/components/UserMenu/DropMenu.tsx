import { useEffect } from "react";
import {
  AddAds,
  LogoutButton,
  MenuListItem,
  MenuUserNavLink,
  MenuWrapper,
  Overlay,
} from "./UserMenu.styled";
import { createPortal } from "react-dom";
import { RootStore } from "../../store/store";
import { useSelector } from "react-redux";

interface DropMenuProps {
  handleLogOut: () => void;
  backdropClick: (e: React.MouseEvent<HTMLElement>) => void;
  toggleModal: (e: React.MouseEvent<HTMLElement>) => void;
  setMenuActive: (v: boolean) => void;
}

const authSelector = (state: RootStore) => {
  return state.auth as {access: boolean};
};

const DropMenu: React.FC<DropMenuProps> = ({
  handleLogOut,
  backdropClick,
  toggleModal,
  setMenuActive,
}) => {
  const {access} = useSelector(authSelector)

  const modalRoot = document.querySelector("#modal-root") as HTMLDivElement;
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setMenuActive(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleClick = () => {
    setMenuActive(false)
  }

  return createPortal(
    <Overlay onClick={backdropClick}>
      <MenuWrapper>
        <AddAds onClick={toggleModal}>Add advert</AddAds>
        {access && <MenuListItem>
          <MenuUserNavLink to="/admin-menu" onClick={handleClick}>Admin menu</MenuUserNavLink>
        </MenuListItem>}
        <MenuListItem>
          <MenuUserNavLink to="/adsUser" onClick={handleClick}>Ads user</MenuUserNavLink>
        </MenuListItem>
        <MenuListItem>
          <MenuUserNavLink to="/buyer" onClick={handleClick}>Purchases</MenuUserNavLink>
        </MenuListItem>
        <MenuListItem>
          <MenuUserNavLink to="/seller" onClick={handleClick}>Sales</MenuUserNavLink>
        </MenuListItem>
        <LogoutButton type="button" onClick={handleLogOut}>
          Logout
        </LogoutButton>
      </MenuWrapper>
    </Overlay>,
    modalRoot
  );
};

export default DropMenu;
