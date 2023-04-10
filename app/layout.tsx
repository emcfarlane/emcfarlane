import React from "react";
import { Metadata } from "next";
import localFont from "next/font/local";
import clsx from "clsx";
import "./global.css";
import PageLinks from "./PageLinks";
//import { MDXProvider } from "@mdx-js/react";

const suisseIntl = localFont({
  variable: "--font-suisse-intl",
  display: "swap",
  src: [
    {
      path: "../public/SuisseIntl/SuisseIntl-Regular-WebM.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/SuisseIntl/SuisseIntl-RegularItalic-WebM.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/SuisseIntl/SuisseIntl-Bold-WebM.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/SuisseIntl/SuisseIntl-BoldItalic-WebM.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/SuisseIntl/SuisseIntl-Light-WebM.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/SuisseIntl/SuisseIntl-LightItalic-WebM.woff2",
      weight: "100",
      style: "italic",
    },
  ],
});

const suisseIntlMono = localFont({
  variable: "--font-suisse-intl-mono",
  display: "swap",
  src: [
    {
      path: "../public/SuisseIntl/SuisseIntlMono-Bold-WebS.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/SuisseIntl/SuisseIntlMono-Regular-WebS.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/SuisseIntl/SuisseIntlMono-Thin-WebS.woff2",
      weight: "100",
      style: "normal",
    },
  ],
});

const links = [
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

export const metadata: Metadata = {
  title: {
    default: "Edward McFarlane",
    template: "%s | Edward McFarlane",
  },
  description: "Engineer.",
  openGraph: {
    title: "Edward McFarlane",
    description: "Engineer.",
    url: "https://emcfarlane.com",
    siteName: "Edward McFarlane",
    //images: [
    //  {
    //    url: "",
    //    width: 1920,
    //    height: 1080,
    //  },
    //],
    locale: "en-GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Edward McFarlane",
    card: "",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  //verification: {
  //  google: "",
  //  yandex: "",
  //},
};

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        suisseIntl.variable,
        suisseIntlMono.variable,
        "antialiased"
      )}
    >
      <body className="max-w-6xl flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <div className="md:flex-shrink-0 -mx-4 md:mx-0 md:px-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-2 overflow-y-auto bg-white px-6 pb-2">
            <div className="flex h-16 shrink-0 items-center">
              <h2 className="inline-block font-serif font-medium align-middle text-5xl">
                e
              </h2>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul
                role="list"
                className="flex flex-1 md:flex-col justify-between flex-row md:gap-y-7 md:gap-x-0 gap-x-7"
              >
                <li className="flex flex-row md:flex-col space-x-4 md:space-x-0 pr-10 mb-2 mt-2 md:mt-0">
                  <PageLinks />
                </li>
                <li className="flex flex-row space-x-4 pr-10 mb-2 mt-2 md:mt-0">
                  {links.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      className={link.className}
                      target="_blank"
                    ></a>
                  ))}
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <main className="flex-auto min-w-0 mt-6 md:mt-0 mb-8 md:mb-20 lg:mb-32 flex flex-col px-2 md:px-0">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
