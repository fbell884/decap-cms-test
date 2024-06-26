import { Container, Row, Button } from "react-bootstrap";
import Link from "next/link";

function ContactBanner(props) {
  return (
    <div className={`${props.bgColor} `}>
      <Container className="py-5">
        <Row className="justify-content-center text-center mx-auto align-items-center">
          <h2>Have Questions? Reach out to us today!</h2>
          <Button href="/contact" variant="secondary" className="turquoiseBg mt-3 contactCTA">
            Contact Us
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ContactBanner;
