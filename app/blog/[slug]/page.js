import { attributes } from "@/content/blog.md";
import Markdown from "react-markdown";

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
        <h1>{blogPostMd.title}</h1>
        <p>{blogPostMd.subtitle}</p>
        <Markdown>{blogPostMd.post}</Markdown>
      </>
    );
  } else {
    return <div>Post Not Found</div>;
  }
};

export default BlogPost;
