import Link from "next/link";
import Breadcrumbs from "./components/Breadcrumbs";
import HeaderWrapper from "./components/HeaderWrapper";
import Title from "./components/Title";

export default function Home() {
  return (
    <>
      <HeaderWrapper>
        <div>
          <Title>Dashboard</Title>
          <Breadcrumbs>
            <Link href="/">Dashboard</Link>
          </Breadcrumbs>
        </div>
      </HeaderWrapper>
    </>
  );
}
