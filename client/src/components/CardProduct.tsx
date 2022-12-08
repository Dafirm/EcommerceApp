
import{ Button, Col, Card }from "react-bootstrap";
import { addToCart, CartProduct } from "../redux/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import {StarRatings} from './StarRatings';


// type CardProps = {
//   images:string
//   description: string
//   title: string
//   _id: any
//   categories: string
//   sizes: string
//   price: string
// };

const CardProduct = (product: CartProduct) => {


    const dispatch = useAppDispatch();
     
 
      const { images, description, title, _id, categories, sizes, price }=product;


     
      
  return (
    <Col style={{ flexGrow: "1" }} className="Products-preview">
      <Card style={{ width: "25rem" }}>
        <Card.Img
          style={{ height: "15rem", objectFit: "contain" }}
          variant="top"
          src={images}
          alt={title}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Categories: {categories}</Card.Text>
          <Card.Text>Size: {sizes}cm</Card.Text>
          <Card.Text>{price}€</Card.Text>
          <p>Reviews</p>

          <Button
            style={{ margin: "15px" }}
            className="col-md-8"
            variant="primary"
            onClick={() => {
              dispatch(addToCart(product));
            }}
            // disabled={isInCart}
          >
            Add to cart
          </Button>

          <br />

          <Button
            style={{ margin: "15px" }}
            className="col-md-8"
            variant="primary"
            href={`/products/${_id}`}
          >
            More info
          </Button>
          <div style={{ margin: "15px" }} className="col-md-8">
            <StarRatings />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProduct



