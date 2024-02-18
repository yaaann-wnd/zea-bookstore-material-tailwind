"use client";

import { HomeIcon } from "@heroicons/react/24/outline";
import { Breadcrumbs as Bread } from "@material-tailwind/react";
import Link from "next/link";

export default function Breadcrumbs({children}) {
  return (
    <Bread className="py-1">
      <Link href="/" className="opacity-50">
        <HomeIcon className="w-4" />
      </Link>
      {children}
    </Bread>
  );
}
