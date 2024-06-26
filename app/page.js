import Image from "next/image";
import Script from "next/script";
import { attributes } from "../content/home.md";
import FeaturedCard from "../components/FeaturedCard";
import HomeCard from "@/components/HomeCard";
import Banner from "@/components/Banner";
import ContactBanner from "@/components/ContactBanner";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default function Home() {
  let { images, homeCards } = attributes;

  const newPath = images.map(image => {
    let newPath = { ...image };
    newPath.imagepath = newPath.imagepath.replace("public", "");
    return newPath;
  });

  return (
    <main className="">
      <Banner bgColor="whiteBg" h1Text="Welcome to our Website!" subheadText="Thanks for visiting! We hope you can find what you are looking for." />
      <div className="lightBlueBg py-5">
        <Container>
          <Row className="justify-content-center">
            <HomeCard imgSrc={newPath[0].imagepath} cardTitle={homeCards[0].title} cardBodyText={homeCards[0].description} buttonText="Go Here!" />
            <HomeCard imgSrc={newPath[1].imagepath} cardTitle={homeCards[1].title} cardBodyText={homeCards[1].description} buttonText="Button 2!" />
            <HomeCard imgSrc={newPath[2].imagepath} cardTitle={homeCards[2].title} cardBodyText={homeCards[2].description} buttonText="Button 3!" />
          </Row>
        </Container>
      </div>
      <ContactBanner bgColor="linearGradient" />
    </main>
  );
}
