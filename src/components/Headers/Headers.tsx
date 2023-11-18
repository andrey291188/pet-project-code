import UserMenu from "../UserMenu/UserMenu";
import { Header, ItemNavigate, LinkNav, ListNavigate } from "./Headers.styled";
import { RootStore, useAppSelector } from "../../store/store";
import AdsMenu from "../AdsMenu/AdsMenu";

const authSelector = (state: RootStore) => {
  return state.auth as { isLoggedIn: boolean };
};

const Headers = () => {
  const { isLoggedIn } =  useAppSelector(authSelector)

  return (
    <Header>
      <ItemNavigate>
        <AdsMenu />
      </ItemNavigate>
      <nav>
        <ListNavigate>

        {!isLoggedIn && <><ItemNavigate>
          <LinkNav to="/registered">Registred</LinkNav>
        </ItemNavigate> 
        
        <ItemNavigate>
          <LinkNav to="/login">LogIn</LinkNav>
        </ItemNavigate></>}

          {isLoggedIn && <ItemNavigate>
             <UserMenu />
          </ItemNavigate>}
          
        </ListNavigate>
      </nav>
    </Header>
  );
};

export default Headers;
