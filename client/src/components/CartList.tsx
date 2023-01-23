import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { toast } from "react-toastify";
import "./CartList.css";
import { Button, Card, Col } from "react-bootstrap";
import { formatCurrency } from "utils/FormatPrice";
import { Product } from "types";
import { removeFromCart,  selectCartQuantity,  selectGetTotalPrice, selectGetTotalQuantity, setDecreaseCartItems, setIncreaseCartItems } from "redux/slices/cartSlice";
import { FaShoppingBasket } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
// import { removeFromCart } from "redux/slices/cartSlice";



const CartList = () => {
  const dispatch = useAppDispatch();

  const carts = useAppSelector((state: RootState) => state.cart.cartItems);

  const renderRows = () => {
    return carts?.map((item: any) => (
      <Col key={Number(Math.random()).toString()}>
        <Card style={{ width: "30rem" }} className="h-100">
          <Card.Img
            style={{ height: "15rem", objectFit: "contain" }}
            variant="top"
            src={item.images}
            alt={item.title}
          />

          <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
              <span className="fs-2"> {item.title}</span>
            </Card.Title>
            <Card.Text className="d-flex justify-content-between align-items-baseline mb-4">
              <span>Size: {item.size}cm </span>
              <span>Category: {item.category}</span>
              <span className="ms-2 text-muted">
                Price: {formatCurrency(item?.price)}
              </span>
            </Card.Text>
            <Card.Text className="d-flex justify-content-between align-items-baseline mb-4 ">
              {item.description}
            </Card.Text>

            <div
              className="d-flex align-item-center flex-column"
              style={{ gap: ".7rem" }}
            >
              <div
                className=" left-25 d-flex align-item-center flex-row "
                style={{ gap: ".6rem" }}
              >
                {/* <button
                  className="w-100"
                  onClick={() => dispatch(setDecreaseCartItems(item._id))}
                >
                  <div
                    className="fs-3 d-flex align-item-center justify-content-center"
                    style={{ gap: ".5rem" }}
                  >
                    <span style={{ fontSize: "12px" }}> cart </span>
                    <span style={{ fontSize: "16px" }}> - </span>
                  </div>
                </button> */}

                <button
                  onClick={() => dispatch(setDecreaseCartItems(item._id))}
                  className=" px-20  top-5 relative rounded px-3 py-2.5 overflow-hidden group bg-blue-600 relative hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-200"
                >
                  <span className="absolute right-0 w-6 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-10 group-hover:-translate-x-40 ease"></span>
                  <span style={{ fontSize: "12px" }}> cart </span>
                  <span style={{ fontSize: "16px" }}> - </span>
                </button>

                <button className=" px-20  top-5 relative rounded px-3 py-2.5 overflow-hidden group bg-blue-600 relative hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-200">
                  {/* <span className="absolute right-0 w-6 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-10 group-hover:-translate-x-40 ease"></span> */}
                  <span style={{ fontSize: "12px" }}>
                    {item.cartQuantity} <FaShoppingBasket />
                  </span>
                </button>

                {/* <Button
                  className="w-100"
                  variant="primary"
                  color="red"
                  onClick={() => {
                    dispatch(setIncreaseCartItems(item._id));
                  }}
                >
                  <div
                    className="d-flex align-item-center flex-column"
                    style={{ gap: ".5rem" }}
                  >
                    <div
                      className="d-flex align-item-center justify-content-center"
                      style={{ gap: ".5rem" }}
                    >
                      <span style={{ fontSize: "12px" }}> cart </span>
                      <span style={{ fontSize: "16px" }}> + </span>
                    </div>
                  </div>
                </Button> */}

                <button
                  onClick={() => {
                    dispatch(setIncreaseCartItems(item._id));
                  }}
                  className=" px-20 left-25 top-5 relative rounded px-3 py-2.5 overflow-hidden group bg-blue-600 relative hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-200"
                >
                  <span className="absolute right-0 w-6 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-10 group-hover:-translate-x-40 ease"></span>
                  <span style={{ fontSize: "12px" }}> cart </span>
                  <span style={{ fontSize: "16px" }}> + </span>
                </button>

                <button
                  onClick={() => {
                    dispatch(removeFromCart(item._id));
                  }}
                  className=" px-25 left-25 top-5 relative rounded px-3 py-2 overflow-hidden group bg-blue-600 relative hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-200"
                >
                  {/* <span className="relative  w-4 h-30 -mt-4 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-10 group-hover:-translate-x-40 ease"></span> */}
                  <span className="relative">
                    <MdOutlineDelete size={20} color="#ffff" />
                  </span>
                </button>

                <span className="ms-2 text-muted">
                  {formatCurrency(item?.price * item.cartQuantity)}
                </span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return <Col className="Cart">{renderRows()}</Col>;
};
export default CartList;



