import { Typography } from "@material-tailwind/react";
import Link from "next/link";

export default function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Dashboard
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Buku
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Kategori
        </Link>
      </Typography>
    </ul>
  );
}
