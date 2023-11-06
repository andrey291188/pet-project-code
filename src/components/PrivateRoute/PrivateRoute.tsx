
import { useSelector } from "react-redux"
import { Navigate } from  "react-router-dom"
import { toast } from "react-toastify"

const PrivateRoute = ({children}: any) => {
    const isAuth = useSelector((state: any)=> state.auth.access_token)
    if(!isAuth){
    toast.warn("You need to log in")
    }
    return isAuth ? children: <Navigate to="/login"/>
}

export default PrivateRoute