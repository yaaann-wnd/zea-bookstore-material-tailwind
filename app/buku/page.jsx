import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "../components/Button";
import Title from "../components/Title";
import HeaderWrapper from "../components/HeaderWrapper";
import Breadcrumbs from "../components/Breadcrumbs";
import Link from "next/link";
import Pagination from "../components/Pagination";
import BooksList from "../components/books/BooksList";

export default function page() {
  return (
    <>
      <HeaderWrapper>
        <div>
          <Title>Buku</Title>
          <Breadcrumbs>
            <Link href="/buku">Buku</Link>
          </Breadcrumbs>
        </div>
        <Button>
          <PlusIcon className="w-4" />
          Tambah Buku
        </Button>
      </HeaderWrapper>
      <BooksList />
      <Pagination />
    </>
  );
}
