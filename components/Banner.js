import { Container, Row, Col, Image } from "react-bootstrap";

function Banner(props) {
  return (
    <div className={`${props.bgColor}`}>
      <Container>
        <Row className="justify-content-center align-items-center text-center text-md-start py-5 py-md-0">
          <Col md={6}>
            <h1 className="turquoiseText">{props.h1Text}</h1>
            <p className="darkBlueText">{props.subheadingText}</p>
          </Col>
          <Col md={6} className="text-md-end">
            <Image src="img/bitmoji.png" width={300} height={300} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
