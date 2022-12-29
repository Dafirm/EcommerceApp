import { MDBTypography } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { findAll } from "../redux/slices/productSlice";
import Spinner from "../components/Spinner";
import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Product } from "types";
import Slider from "components/Slider";
import AdminCardProduct from "components/AdminCardProduct";
import HeaderAdmin from "components/HeaderAdmin";

const Dashboard = () => {
  const {
    products,
    loading,
    searchedterms,
  } = useAppSelector((state: RootState) => ({ ...state.products }));
  const dispatch = useAppDispatch();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    dispatch(findAll());
  }, [dispatch]);

  useEffect(() => {
    refresh && dispatch(findAll());
    if (refresh)setRefresh(prev=>false);
  }, [dispatch,refresh]);

  if (loading) return <Spinner />;

  const filteredItems = products?.filter(
    (val: Product) => val.title.toLowerCase().indexOf(searchedterms) >= 0
  );

  return (
    <>
      <HeaderAdmin />
      <div className="Home__CardHeader">
        <Slider />

        {filteredItems.length === 0 && searchedterms.length !== 0 && (
          <MDBTypography className="text-center mb-0" tag="h2">
            No Product Found!!!
          </MDBTypography>
        )}
        <section
          style={{
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          <span>Welcome to Admin Dashboard</span>
        </section>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {searchedterms.length >= 0
            ? filteredItems.map((product: any) => (
                <AdminCardProduct
                  key={product._id}
                  setRefresh={setRefresh}
                  product={product}
                />
            
            : ""}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
