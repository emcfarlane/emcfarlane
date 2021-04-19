import Link from "next/link";
//import { HeadPost } from "./HeadPost";

const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;
  console.log("post", post);

  return (
    <article>
      <header>
        <div>{meta}</div>
      </header>
      <Link href={"/posts" + link}>
        <a>Read more →</a>
      </Link>
      {post.module.children}
    </article>
  );
};

export default Post;
