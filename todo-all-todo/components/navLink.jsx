"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavLink(props) {
  const pathname = usePathname();

  let isCurrent = false;
  if (pathname === props.path && pathname !== "/") {
    isCurrent = true;
  }

  return (
    <>
      {isCurrent && (
        <span className="text-l   underline text-red-800 font-medium	">
          {props.title}
        </span>
      )}
      {!isCurrent && (
        <Link href={props.path}>
          <span className="text-  hover:underline text-indigo-800 font-medium	hover:cursor-pointer">
            {props.title}
          </span>
        </Link>
      )}
    </>
  );
}
