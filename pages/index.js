import Head from "next/head";
//import { posts } from "../getAllPosts";
//import Post from "../components/Post";
//          {posts.map((post) => (
//<Post key={post.link} post={post} />
//          ))}

import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Index() {
  const items = [
    {
      href: "https://www.linkedin.com/in/edward-mcfarlane-b5493375/",
      className: "header-linkedin header-logo",
    },
    {
      href: "https://twitter.com/EdwardMcFarlane",
      className: "header-twitter header-logo",
    },
    {
      href: "https://www.instagram.com/edwardmcfarlane/",
      className: "header-instagram header-logo",
    },
    {
      href: "https://github.com/emcfarlane",
      className: "header-github header-logo",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>emcfarlane</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="relative flex flex-col items-center justify-center flex-grow py-20">
        <div className="container px-4 position-relative">
          <a
            className="small-caps-regular fade position-absolute"
            style={{
              top: "calc(var(--v) * -0.125)",
              transform: "translateY(-100%)",
            }}
            href="https://emcfarlane.github.io"
            target="_blank"
          >
            Blog ›
          </a>
          <h1 className="font-serif">Edward McFarlane</h1>
          <div className="flex space-x-4">
            {items.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className={item.className}
                target="_blank"
              ></a>
            ))}
          </div>
        </div>

        <div className="container pt-4">
          <figure className="p-4 md:flex md:p-0">
            <img className="max-h-48 " src="/eddie_small.jpg" alt="" />
            <div className="pt-6 text-center md:p-8 md:text-left space-y-4">
              <p className="text-lg font-semibold">
                Software engineer with a masters in Aeronautical Engineering.
              </p>
              <p className="text-lg font-semibold">
                Working on McFarlane Projects.
              </p>
              <a
                className="small-caps-regular fade position-absolute"
                style={{
                  top: "calc(var(--v) * -0.125)",
                  transform: "translateY(-100%)",
                }}
                href="https://mcfarlaneprojects.com"
                target="_blank"
              >
                McFarlane Projects ›
              </a>

              <figcaption className="font-medium">
                <div className="opacity-75">edward@emcfarlane.com</div>
                <div className="opacity-50">Senior Software Engineer</div>
              </figcaption>
            </div>
          </figure>
        </div>
      </main>

      <Footer />

      <style jsx>{``}</style>
    </div>
  );
}
