import { Navigate, useParams } from "react-router-dom";

const AdsRedirect = () => {
    const { adsID } = useParams();
    return (
      <Navigate to={`/ads/${adsID}`} replace />
    );
  };

  export default AdsRedirect