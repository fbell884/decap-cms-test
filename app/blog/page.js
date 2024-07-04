import { attributes } from "../../content/blog.md";
import Banner from "@/components/Banner";
import FeaturedCard from "@/components/FeaturedCard";
import { Col, Container, Row } from "react-bootstrap";
import Markdown from "react-markdown";

function Blog() {
  let { blogPosts } = attributes;

  return (
    <div>
      <Banner bgColor="lightBlueBg" h1Text="Blog Test" subheadingText="We usually respond within 24-48hrs." />
      <Container className="py-3">
        <div className="blogPostWrapper">
          <Row className="justify-content-center">
            {blogPosts.reverse().map((post, key) => (
              <Col md={4} className="py-3" key={key}>
                <FeaturedCard title={post.title} subtitle={post.subtitle} publishDate={post.date} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Blog;
