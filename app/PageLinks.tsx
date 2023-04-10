"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];

export default function PageLinks() {
  const pathname = usePathname();

  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={clsx(
            "group flex gap-x-3 rounded-md py-2 leading-6 font-semibold ",
            pathname === item.href ? "opacity-100" : "opacity-75"
          )}
        >
          <span
            className={clsx(
              pathname === item.href ? "opacity-100" : "opacity-0",
              "group-hover:opacity-100 opacity-0"
            )}
          >
            ›{" "}
          </span>
          {item.name}
        </Link>
      ))}
    </>
  );
}
