import { useState } from "react";
import { ButtonAdsMenu } from "./AdsMenu.styled"
import AdsDropMenu from "./AdsDropMenu";

type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

const AdsMenu = () => {
    const [menuActive, setMenuActive] = useState<boolean>(false);

    
    const handleMenuClick:ClickHandler = (event) => {
        setMenuActive(!menuActive);
      };

      const backdropClick = (e: React.MouseEvent<HTMLElement>) => {
        if (e.currentTarget === e.target) {
          setMenuActive(!menuActive);
        }
      };

    return(
        <>
        <ButtonAdsMenu $active={menuActive ? menuActive.toString() : undefined} onClick={handleMenuClick}>Menu</ButtonAdsMenu>
        {menuActive && <AdsDropMenu setMenuActive={setMenuActive} backdropClick={backdropClick}/>}
        </>
    )

}

export default AdsMenu