import { ReactNode } from "react"
import { useSelector } from "react-redux"
import { Navigate }  from "react-router-dom"
import { RootStore } from "store/store"

interface PublicRouteProps {
    children: ReactNode
  }

const PublicRoute: React.FC<PublicRouteProps> = ({children}) => {
    const {access_token} = useSelector((state: RootStore) => state.auth as {access_token: string})
    if (!access_token) {
        return <>{children}</>
    }
    return <Navigate to="/adsUser"/>

}

export default PublicRoute