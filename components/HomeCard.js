"use client";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function HomeCard(props) {
  return (
    <Col md={4}>
      <Card className={`h-100 ${props.bgColor}`}>
        <Card.Img variant="top" src={props.imgSrc} height={250} className="cardImgSizing mx-auto" />
        <hr className="my-0" />
        <Card.Body>
          <Card.Title className="turquoiseText fw-bold">{props.cardTitle}</Card.Title>
          <Card.Text className="darkBlueText">{props.cardBodyText}.</Card.Text>
          <Button className="turquoiseBg">{props.buttonText}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default HomeCard;
