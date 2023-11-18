import { useEffect, useState } from "react";
import CreateAdsCardsPreview from "../../components/CreateAdsCardsPreview/CreateAdsCardsPreview";
import { getAdsforPagination, getAdsforQuery } from "../../service/adsRequest";
import PlaceHolderAds from "../../components/PlaceholderAds/PlaceHolderAds";
import { Loader } from "../../components/Loader/Loader";
import { AdsSection, ButtonSubmit, FormikForm, InputField, Label, SupportFormik } from "./Ads.styled";
import noAdsImg from "../../imgFolder/istockphoto-906611618-1024x1024.jpg";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";


interface Data {
    active: boolean;
    description: string;
    fotoAds: string[] | null;
    owner: string;
    price: number;
    title: string;
    updatedAt: string;
    views: number;
    _id: string;
  }

  interface Request {
    request: string;
  }

const Ads = () => {
    const [adsData, setAdsData] = useState<Data[]>([]);
    const [loader, setLoader] = useState(false);
    const [page, setPage] = useState(1);
    const [queryParams, setQueryParams] = useSearchParams();
    const query = queryParams.get('query') ?? '';
    const [request, setRequest] = useState('');
    const [btnVisible, setBtnVisible] = useState(0);

      useEffect(() => {
        getRequest(page, query);
      }, [query, page]);
    
      const getRequest = async (page: number | string, query?: string,) => {

        setLoader(true);
        try {
          if(!query) {
            const {data: { result, totalAds }} = await getAdsforPagination(page);
            if (!totalAds) {
              return toast.warn("No advertisements found");
            }
            setAdsData((prev) => [...prev, ...result]);
            setBtnVisible(totalAds)
          }
          if(query) {
            const {data: { result, totalAds }} = await getAdsforQuery(page, query);
            if (!totalAds) {
              return toast.warn(`Request with this name ${query} not found`);
            }
            setAdsData((prev) => [...prev, ...result]);
            setBtnVisible(totalAds)
          }
        } catch (error) {
          setLoader(false);
        } finally {
          setLoader(false);
        }
      };

      const handleSearch = (e: any) => {
        setRequest(e.currentTarget.value);
      }

      const handleSubmit = (values: Request, { resetForm }: any) => {
        if (request.trim() === '') {
          alert('Enter your request');
        }
        const nextParams: any = request !== '' ? { query: request } : {};
        setQueryParams(nextParams);
        setRequest("")
        setPage(1)
        setAdsData([])
      }

      const handleIncrement = () => {
        setPage((prevPage) => prevPage + 1)
       };

       const totalPage = btnVisible / adsData.length;

    return (
      <AdsSection>
        <SupportFormik
      initialValues={{ request: "" }}
      onSubmit={handleSubmit}
    >
        <FormikForm>
          <Label>
            <InputField type="text" name="request" required  placeholder="Enter your request" onChange={handleSearch} value={request}/>
          </Label>
          <ButtonSubmit type="submit">Search</ButtonSubmit>
        </FormikForm>
    </SupportFormik>
        {loader && <Loader />}
        {adsData.length > 0 ? <CreateAdsCardsPreview dataCard={adsData} /> : 
              <PlaceHolderAds img={noAdsImg}/>}
              {totalPage > 1 && !loader && adsData.length > 0 && <ButtonSubmit onClick={handleIncrement} type="button">Load more</ButtonSubmit>}
      </AdsSection>
    );
  };
  
  export default Ads;