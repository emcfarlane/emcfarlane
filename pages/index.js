import Head from "next/head";
//import { posts } from "../getAllPosts";
//import Post from "../components/Post";
//          {posts.map((post) => (
//<Post key={post.link} post={post} />
//          ))}

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HelloWorld from "./posts/hello_world.mdx";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>emcfarlane</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="relative flex flex-col items-center justify-center flex-grow py-20">
        <section className="flex flex-col w-full px-4 mt-8 text-lg sm:px-6 lg:px-8 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <HelloWorld />
        </section>
      </main>

      <Footer />

      <style jsx>{``}</style>
    </div>
  );
}
