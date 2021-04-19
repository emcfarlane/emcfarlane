import React from "react";
import Link from "next/link";

function IconsList({
  width = "100%",
  height = "100%",
  fill = "currentColor",
  className = "",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      className={className}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
}

function IconsCross({
  width = "100%",
  height = "100%",
  fill = "currentColor",
  className = "",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      className={className}
      viewBox="0 0 16 16"
    >
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>
  );
}

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const items = [
    {
      name: "About",
      href: "/about",
    },
  ];

  return (
    <div>
      <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <a href="#">
                  <h1 className="inline-block px-4 text-xl font-medium align-middle sm:text-6xl">
                    e
                  </h1>
                </a>
              </Link>
              <div className="flex items-center -mr-2 md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded="false"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  <IconsList className="w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            {items.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className="inline-block font-medium align-middle">
                  <h2 className="inline-block px-4 text-2xl font-medium align-middle">
                    {item.name}
                  </h2>
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <div
        className={
          "absolute inset-x-0 top-0 z-20 p-2 transition transform origin-top-right md:hidden" +
          (navbarOpen ? "" : " hidden")
        }
      >
        <div className="overflow-hidden bg-white ring-1 ring-black ring-opacity-5">
          <div className="flex items-center justify-between px-5 pt-4">
            <div>e</div>
            <div className="-mr-2">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 bg-white rounded-md hover:text-ana-pink focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <span className="sr-only">Close main menu</span>
                <IconsCross className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {items.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className="block px-3 py-2 text-base font-medium rounded-md hover:text-ana-pink">
                  <h2 className="inline-block px-4 font-medium align-middle text-l">
                    {item.name}
                  </h2>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
