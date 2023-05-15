import { allBlogs } from "contentlayer/generated";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
//import clsx from "clsx";

import { format, parseISO } from "date-fns";

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

function BlogPost({ post }) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <section>
      <h1 className="font-bold text-3xl">{post.title}</h1>
      <div className="mb-4">
        <time dateTime={post.date} className="block text-slate-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
      <article className="prose lg:prose-xl dark:prose-invert">
        <MDXContent components={mdxComponents} />
      </article>
    </section>
  );
}

export default function Page({ params }) {
  const slug = params.slug.join("/");
  const post = allBlogs.find((post) => post.slug === slug);
  if (!post) {
    return <div>Not found</div>;
  }

  return <BlogPost post={post} />;
}
