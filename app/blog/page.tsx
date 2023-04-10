import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allBlogs } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog posts by me.",
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl mb-5">Blog</h1>
      {allBlogs
        .sort((a, b) => {
          return compareDesc(new Date(a.date), new Date(b.date));
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <h2 className="w-full text-xl">{post.title}</h2>
            <time dateTime={post.date} className="block text-sm text-slate-600">
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
          </Link>
        ))}
    </section>
  );
}
