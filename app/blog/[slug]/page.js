import Banner from "@/components/Banner";
import { attributes } from "@/content/blog.md";
import Markdown from "react-markdown";
import { Row, Col, Container } from "react-bootstrap";

const BlogPost = ({ params: { slug } }) => {
  let { blogPosts } = attributes;
  let urlSlug = blogPosts.map(posts => {
    return {
      title: posts.title.replace(/\s+/g, "-").toLowerCase(),
      subtitle: posts.subtitle,
      post: posts.post
    };
  });

  const slugCheck = slug => {
    let check = false;
    urlSlug.forEach(post => {
      if (slug === post.title) {
        check = true;
      }
    });
    return check;
  };

  const getPostBySlug = slug => {
    let post;
    blogPosts.forEach(posts => {
      if (slug == posts.title.replace(/\s+/g, "-").toLowerCase()) {
        post = posts;
      }
    });
    return post;
  };

  if (slugCheck(slug)) {
    const blogPostMd = getPostBySlug(slug);
    return (
      <>
        <Banner bgColor="lightBlueBg" h1Text={blogPostMd.title} subheadingText={blogPostMd.subtitle} />
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <Markdown>{blogPostMd.post}</Markdown>
            </Col>
          </Row>
        </Container>
      </>
    );
  } else {
    return <div>Post Not Found</div>;
  }
};

export default BlogPost;
