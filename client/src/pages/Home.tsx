import { MDBTypography } from "mdb-react-ui-kit";
// }
import CardHeader from "../components/CardHeader";
import { useEffect } from "react";

import { findAll } from "../redux/slices/productSlice";
import CardProduct from "../components/CardProduct";
import Spinner from "../components/Spinner";
import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Product } from "types";
import Slider from "components/Slider";

const Home = () => {
  const {
    items: products,
    loading,
    searchedterms,
  } = useAppSelector((state: RootState) => ({ ...state.products }));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findAll());
  }, [dispatch]);

  if (loading) return <Spinner />;

  const filteredItems = products.filter(
    (val: Product) => val.title.toLowerCase().indexOf(searchedterms) >= 0
  );

  return (
    <div className="Home__CardHeader">
      {/* <CardHeader /> */}
      <Slider/>

      {filteredItems.length === 0 && searchedterms.length !== 0 && (
        <MDBTypography className="text-center mb-0" tag="h2">
          No Product Found!!!
        </MDBTypography>
      )}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {searchedterms.length >= 0
          ? filteredItems.map((product: any) => (
              <CardProduct key={product._id} {...product} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default Home;
