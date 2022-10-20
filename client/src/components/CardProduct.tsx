
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";
import{ Button, Row, Col }from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

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
  name,
  categories,
  size,
  price,
}: CardProps) => {
  return (
    <Row>
      <Col md={4} lg={3} className="Products-preview" key='index'>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={images} alt={title} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Categories: {categories}</Card.Text>
            <Card.Text>Size: {size}cm</Card.Text>
            <Card.Text>{price}€</Card.Text>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CardProduct


{/* <MDBRow className="row-cols-1 row-cols-md-2 g-4">
        <MDBCol>
          <MDBCard
            className="h-100 mt-6 d-sm-flex"
            style={{ maxWidth: "20rem" }}
          >
            <MDBCardImage position="top" src={images} alt={title} fluid />

            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle>{title}</MDBCardTitle>
                <MDBCardText>{description}</MDBCardText>
                <MDBCardText>
                  <small className="text-muted">Categories: {categories}</small>
                </MDBCardText>
                <MDBCardText>
                  <small className="text-muted">Size: {size}cm</small>
                </MDBCardText>
                <MDBCardText>
                  <small className="text-muted">{price}€</small>
                </MDBCardText>
              </MDBCardBody>
              <MDBCardBody>
                <MDBBtn href="#">Add to cart</MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBCard>
        </MDBCol>
      </MDBRow> */}