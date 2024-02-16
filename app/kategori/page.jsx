import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "../components/Button";
import HeaderWrapper from "../components/HeaderWrapper";
import Title from "../components/Title";

export default function page() {
  return (
    <>
      <HeaderWrapper>
        <Title>Kategori</Title>
        <Button>
          <PlusIcon className="w-4" />
          Tambah Kategori
        </Button>
      </HeaderWrapper>
    </>
  );
}
