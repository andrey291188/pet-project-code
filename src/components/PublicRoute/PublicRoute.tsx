import { useSelector } from "react-redux"
import { Navigate }  from "react-router-dom"

const PublicRoute = ({children}: any) => {
    const isAuth = useSelector((state: any)=> state.auth.access_token)
    return !isAuth ? children : <Navigate to="/adsUser"/>
}

export default PublicRoute