import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "../components/Button";
import Title from "../components/Title";
import HeaderWrapper from "../components/HeaderWrapper";

export default function page() {
  return (
    <>
      <HeaderWrapper>
        <Title>Buku</Title>
        <Button>
          <PlusIcon className="w-4" />
          Tambah Buku
        </Button>
      </HeaderWrapper>
    </>
  );
}
