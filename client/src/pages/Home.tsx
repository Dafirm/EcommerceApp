

import {
  
  MDBTypography,
} from "mdb-react-ui-kit";
// }
import CardHeader from '../components/CardHeader'
import  { useEffect } from "react";


import { findAll } from "../redux/slices/productSlice";
import CardProduct from "../components/CardProduct";
import Spinner from "../components/Spinner";
import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";


const Home = () => {
  const { items, loading, searchedterms, filteredItems } = useAppSelector((state:RootState) => ({ ...state.product}));
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(findAll());
    
  }, [dispatch]);

  if (loading) 
    return <Spinner  />;
  


  return (
    <div className="Home__CardHeader">
      <CardHeader />

      {filteredItems.length === 0 && searchedterms.length !== 0 && (
        <MDBTypography className="text-center mb-0" tag="h2">
          No Product Found!!!
        </MDBTypography>
      )}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {items && searchedterms.length === 0
          ? items.map((item: any) => <CardProduct key={item.id} {...item} />)
          : filteredItems.map((item: any) => <CardProduct key={item.id} {...item} />)}
      </div>
    </div>
  );
}

export default Home

