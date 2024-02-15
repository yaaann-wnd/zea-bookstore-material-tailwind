import { BookOpenIcon, ListBulletIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavList() {

  const pathname = usePathname();

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`flex items-center gap-x-2 p-1 font-medium hover:text-indigo-400 transition-colors ${pathname === '/' ? 'text-indigo-400 underline decoration-2' : ''}`}
      >
        <Squares2X2Icon className="w-4" />
        <Link
          href="/"
          className="flex items-center"
        >
          Dashboard
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`flex items-center gap-x-2 p-1 font-medium hover:text-indigo-400 transition-colors ${pathname === '/buku' ? 'text-indigo-400 underline decoration-2' : ''}`}
      >
        <BookOpenIcon className="w-4" />
        <Link
          href="/buku"
          className="flex items-center"
        >
          Buku
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`flex items-center gap-x-2 p-1 font-medium hover:text-indigo-400 transition-colors ${pathname === '/kategori' ? 'text-indigo-400 underline decoration-2' : ''}`}
      >
        <ListBulletIcon className="w-4" />
        <Link
          href="/kategori"
          className="flex items-center"
        >
          Kategori
        </Link>
      </Typography>
    </ul>
  );
}
