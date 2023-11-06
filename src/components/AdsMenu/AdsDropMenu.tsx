import { useEffect } from "react";
import { MenuListItem, MenuUserNavLink, MenuWrapper, Overlay } from "./AdsMenu.styled";
import { createPortal } from "react-dom";

interface DropMenuProps {
    setMenuActive: (v: boolean) => void;
    backdropClick: (e: React.MouseEvent<HTMLElement>) => void;
  }
  

const AdsDropMenu: React.FC<DropMenuProps> = ({setMenuActive, backdropClick}) => {

    const modalRoot: any = document.querySelector("#modal-root");
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
        <MenuListItem>
          <MenuUserNavLink to="/" onClick={handleClick}>Home</MenuUserNavLink>
        </MenuListItem>
        <MenuListItem>
          <MenuUserNavLink to="/ads" onClick={handleClick}>Ads</MenuUserNavLink>
        </MenuListItem>
        <MenuListItem>
          <MenuUserNavLink to="/favorite" onClick={handleClick}>Favorite</MenuUserNavLink>
        </MenuListItem>
      </MenuWrapper>
    </Overlay>,
    modalRoot
  );
}

export default AdsDropMenu