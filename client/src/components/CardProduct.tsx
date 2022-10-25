
import {
  MDBCardText,
} from "mdb-react-ui-kit";
import{ Button, Col, Card }from "react-bootstrap";
import { addToCart } from "redux/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

import {StarRatings} from './StarRatings';

type CardProps = {
  images:string
  description: string
  title: string
  tags: [string]
  _id: any
  name: string
  categories: string
  size: string
  price: string
};

const CardProduct = ({
  images,
  description,
  title,
  tags,
  _id,
  categories,
  size,
  price,
}: CardProps) => {


    const dispatch = useAppDispatch();
     const { item, cart }:any = useAppSelector((state: RootState) => state);

    //  cart = dispatch(addToCart(item))
    //  if (!cart) {
    //   cart = const newCart:any
    //  }
                // const isInCart = cart.items.findById(
                //   (item:any) => item.title === item.title
                // )
  return (
    <Col style={{ flexGrow: "1" }} className="Products-preview" key="index">
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
          <Card.Text>Size: {size}cm</Card.Text>
          <Card.Text>{price}€</Card.Text>
          <p>Reviews</p>

          <Button
            style={{ margin: "15px" }}
            className="col-md-8"
            variant="primary"
            onClick={() => dispatch(addToCart(item))}
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



