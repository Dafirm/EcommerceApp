import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import {addToCart, CartProduct, emptyCart, removeFromCart } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./CartList.css";
import { Button, Card, Col } from "react-bootstrap";
import { formatCurrency } from "utils/FormatPrice";


const CartList = (product: CartProduct) => {
  const items = useAppSelector((state: RootState) => state.cart.items);

  const dispatch = useAppDispatch();

  // const { images, description, title, id, categories, sizes, price }=product;

  // const emptyCart = (_id: string) => {
  //   dispatch(removeFromCart(product));
  //   toast("Product removed from cart.");
  // };

  // const handleRemoveProduct = (id: string) => {
  //   dispatch(removeFromCart(id));
  // };

  const renderRows = (items: CartProduct[]) => {
    return items?.map((item: any, i: number) => (
      <Col key={Number(Math.random()).toString()}>
        {/* <td>{item?._id.substring(0, 8)}</td> */}

        <Card style={{ width: "30rem" }} className="h-100">
          <Card.Img
            style={{ height: "15rem", objectFit: "contain" }}
            variant="top"
            src={item?.images}
            alt={item?.title}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
              <span className="fs-2"> {item?.title}</span>
              <span className="ms-2 text-muted">
                Price: {formatCurrency(item?.price)}
              </span>
            </Card.Title>
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
              <span>Size: {item?.sizes}cm </span>
              <span>Category: {item?.categories}</span>
            </Card.Title>
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
              <span>{item?.description} </span>
            </Card.Title>

            <div
              className="d-flex align-item-center flex-column"
              style={{ gap: ".7rem" }}
            >
              <div
                className="d-flex align-item-center flex-row"
                style={{ gap: ".6rem" }}
              >
                <Button
                  className="w-100"
                  variant="primary"
                  color="red"
                  onClick={() => {
                    dispatch(removeFromCart({_id:product._id}));
          
                  }}
                 
                >
                  <div
                    className="fs-3 d-flex align-item-center justify-content-center"
                    style={{ gap: ".5rem" }}
                  >
                    <span style={{ fontSize: "12px" }}> cart </span>
                    <span style={{ fontSize: "16px" }}> - </span>
                  </div>
                </Button>

                <Button
                  className="w-100"
                  variant="primary"
                  color="red"
                  onClick={() => {
                    dispatch(addToCart(product));
                
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
                </Button>
              </div>
              <Button
                className="w-100"
                variant="primary"
                color="red"
                onClick={() => {
                  dispatch(removeFromCart({_id:item.productId, removeAll:true}));
                  
                }}
              >
                Remove item
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return <Col className="Cart">{renderRows(items)}</Col>;
};
export default CartList;


