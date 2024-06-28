import { attributes } from "../../content/blog.md";
import Banner from "@/components/Banner";
import Markdown from "react-markdown";

function Blog() {
  let { blogPosts } = attributes;

  return (
    <div>
      <Banner bgColor="lightBlueBg" h1Text="Blog Test" subheadingText="We usually respond within 24-48hrs." />
      <Markdown>{blogPosts[0].post}</Markdown>
    </div>
  );
}

export default Blog;
