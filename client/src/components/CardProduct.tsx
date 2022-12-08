
import{ Button, Col, Card }from "react-bootstrap";
import { addToCart, CartProduct } from "../redux/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import {StarRatings} from './StarRatings';
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { Product } from "types";
import { toast } from "react-toastify";


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
      // console.log(product)
     
  return (
    <Col style={{ flexGrow: "1" }} className="Products-preview" key="_id">
      <Card style={{ width: "25rem" }}>
        <Card.Img
          style={{ height: "15rem", objectFit: "contain" }}
          variant="top"
          src={images}
          alt={title}
         
        />
        <Card.Body >
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
              dispatch(
                addToCart(product)
              );}}
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



