"use client";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function FeaturedCard(props) {
  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.subtitle}</Card.Text>
        <Button variant="primary" href={`/blog/${props.title.replace(/\s+/g, "-").toLowerCase()}`}>
          Read Post
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default FeaturedCard;
