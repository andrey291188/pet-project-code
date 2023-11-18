import { useEffect, useState } from "react";
import { AdminMenuSection, ChangeButton } from "./AdminMenu.styled";
import { getAllUsers } from "../../service/authRequest";
import { Loader } from "../../components/Loader/Loader";
import UserCardInfo from "../../components/UserCardInfo/UserCardInfo";
import PlaceHolderAds from "../../components/PlaceholderAds/PlaceHolderAds";
import notInfo from "../../imgFolder/no_information.jpg";
import DealsCardInfo from "../../components/DealsCardInfo/DealsCardInfo";
import { getAllSales } from "../../service/buyRequest";

interface DataUser {
  avatarURL: string;
  email: string;
  name: string;
  phone: number;
  updatedAt: string;
  _id: string;
}

interface DataDeals {
  buyer_email: string;
  buyer_id: string;
  buyer_name: string;
  buyer_phone: number;
  createdAt: string;
  price: number;
  seller_email: string;
  seller_id: string;
  seller_name: string;
  seller_phone: number;
  title: string;
  updatedAt: string;
  _id: string;
}

const AdminMenu = () => {
  const [userInfoData, setUserInfoData] = useState<DataUser[]>([]);
  const [dealsIfnoData, setDealsInfoData] = useState<DataDeals[]>([]);
  const [loader, setLoader] = useState(false);
  const [changeInfo, setChangeInfo] = useState(false);

  useEffect(() => {
    changeInfo ? getRequestDeals() : getRequestUser();
  }, [changeInfo]);

  const getRequestUser = async () => {
    setLoader(true);
    try {
      const {
        data: { result },
      } = await getAllUsers();
      setUserInfoData([...result]);
    } catch (error) {
      setLoader(false);
    } finally {
      setLoader(false);
    }
  };

  const getRequestDeals = async () => {
    setLoader(true);
    try {
      const {
        data: { result },
      } = await getAllSales();
      setDealsInfoData([...result]);
    } catch (error) {
      setLoader(false);
    } finally {
      setLoader(false);
    }
  };

  const handleChangeinfo = () => {
    setChangeInfo(!changeInfo);
  };

  return (
    <AdminMenuSection>
      {loader && <Loader />}
      <ChangeButton onClick={handleChangeinfo} type="button">
        {changeInfo ? "Go to users" : "Go to deals"}{" "}
      </ChangeButton>
      {changeInfo &&
        !loader &&
        (dealsIfnoData.length > 0 ? (
          <DealsCardInfo dealsIfnoData={dealsIfnoData}/>
        ) : (
          <PlaceHolderAds img={notInfo} />
        ))}
      {!changeInfo &&
        !loader &&
        (userInfoData.length > 0 ? (
          <UserCardInfo
            userInfoData={userInfoData}
            getRequest={getRequestUser}
          />
        ) : (
          <PlaceHolderAds img={notInfo} />
        ))}
    </AdminMenuSection>
  );
};

export default AdminMenu;
