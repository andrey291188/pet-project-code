import { toast } from "react-toastify";
import { deleteUser } from "../../service/authRequest";
import { AvatarUser, DeleteUser, ItemUserCard, TextUser, TitleUserCard, UserCardList } from "./UserCardInfo.styled"

interface Data {
    avatarURL: string;
    email: string;
    name: string;
    phone: number;
    updatedAt: string;
    _id: string;
  }

interface UserCardProps {
    userInfoData: Data[];
    getRequest: ()=>{}
}

const UserCardInfo: React.FC<UserCardProps> = ({userInfoData, getRequest}) => {

    
    const handleDeleteUser = async (id: string, ) => {
     try {
        await deleteUser(id)
        toast.success("Delete user success")
        getRequest()
     } catch (error:any) {
        toast.warning(error.message)
     }
    }
   
    return (
        <>
         <TitleUserCard>User management</TitleUserCard>
        <UserCardList>
         {userInfoData?.map(({avatarURL, email, name, phone, _id})=>(
            <ItemUserCard key={_id}>
                <AvatarUser src={avatarURL} alt={name} />
                <TextUser>{name}</TextUser>
                <TextUser>{email}</TextUser>
                <TextUser>+{phone}</TextUser>
                <DeleteUser onClick={() => handleDeleteUser(_id)} type="button">Delete</DeleteUser>
            </ItemUserCard>
         ))}
        </UserCardList>
        </>
    )
}

export default UserCardInfo


