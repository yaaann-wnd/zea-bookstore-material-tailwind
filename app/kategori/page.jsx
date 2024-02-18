import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "../components/Button";
import HeaderWrapper from "../components/HeaderWrapper";
import Title from "../components/Title";
import Breadcrumbs from "../components/Breadcrumbs";
import Link from "next/link";

export default function page() {
  return (
    <>
      <HeaderWrapper>
        <div>
          <Title>Kategori</Title>
          <Breadcrumbs>
            <Link href="/kategori">Kategori</Link>
          </Breadcrumbs>
        </div>
        <Button>
          <PlusIcon className="w-4" />
          Tambah Kategori
        </Button>
      </HeaderWrapper>
    </>
  );
}
