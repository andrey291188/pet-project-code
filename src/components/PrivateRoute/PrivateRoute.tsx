import { Navigate } from  "react-router-dom"
import { toast } from "react-toastify"
import {ReactNode} from 'react';
import { RootStore, useAppSelector } from "store/store";

interface PrivateRouteProps {
    children: ReactNode
  }

const PrivateRoute: React.FC<PrivateRouteProps> = ({children}) => {
    const {access_token} = useAppSelector((state: RootStore)=> state.auth as { access_token: string})

    if(!access_token){
    toast.warn("You need to log in")
    return <Navigate to="/login"/>
    }

    return <>{children}</> 
}

export default PrivateRoute