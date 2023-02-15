"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavLink(props) {
  let isDetail = false
  const pathname = usePathname();

  let isCurrent = false;
  if (pathname === props.path && pathname !== "/") {
    isCurrent = true;
  }

  return (
    <>
      {isCurrent && (
        <span className="text-l   underline text-indigo-900 font-medium	">
          {props.title}
        </span>
      )}
      {!isCurrent && (
        <Link href={props.path}>
          <span className="text-  hover:underline text-indigo-600 font-medium	hover:cursor-pointer">
            {props.title}
          </span>
        </Link>
      )}
    </>
  );
}
