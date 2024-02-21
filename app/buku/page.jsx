import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "../components/Button";
import Title from "../components/Title";
import HeaderWrapper from "../components/HeaderWrapper";
import Breadcrumbs from "../components/Breadcrumbs";
import Link from "next/link";
import BookCard from "../components/Card";
import Pagination from "../components/Pagination";

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
      <div className="grid grid-cols-3 gap-3 mb-7">
        <BookCard
          title="City of Ours"
          author="lilsunhc66"
          price="Rp 89.100"
          desc="Anak dari laki-laki dengan kaos hitam bergambar chewbacca Star Wars itu duduk terdiam dengan tangan kanannya yang menggenggam erat Nintendo E3 miliknya sambil sesekali menatap pria paruh baya yang sejak sepuluh menit yang lalu sibuk berkutat dengan ponsel yang melekat di tangan kanannya. Merasa diabaikan, ia lantas menoleh ke arah bayi perempuan ya"
          category="Humor"
          image="https://cdn.gramedia.com/uploads/picture_meta/2023/6/14/d2ftozz2johx3qxkseqinv.jpg"
          priority={true}
        />
        <BookCard
          title="Befuddles"
          author="Deshtaran None"
          price="Rp 104.550"
          desc='"Pilih Aku atau dia?"Pertanyaan itu terdengar begitu tenang dan dingin disertai tatapan tanpa emosi dari Snowy, membuat Reifan sedikit tertegun. Dipandanginya wajah sang kekasih yang sudah 3 tahun ini merajut asmara dengannya dengan lekat, meneliti iris cokelatnya yang biasanya bening berbinar kini tampak datar. "Snowy"'
          category="Fiksi"
          image="https://cdn.gramedia.com/uploads/picture_meta/2023/5/28/7kgcvsvkzz9qy979jbbvmf.jpg"
        />
        <BookCard
          title="The Ghost Next Door"
          author="Eve Shi"
          price="Rp 60.000"
          desc="Dari balik belokan koridor lantai 5, Chiya melihat sosok perempuan berambut pendek, mengenakan tunik putih dan celana panjang hitam yang berlumuran darah. Tangannya menggenggam sebilah cutter dengan cairan merah masih menetes. Sosok itu kemudian menembus apartemen 501 yang berdekatan dari unitnya."
          category="Thriller"
          image="https://cdn.gramedia.com/uploads/items/9789797808945_the-ghost-next-door.jpg"
        />
        <BookCard
          title="Lentera Takdir"
          author="Alfia Ramadhani"
          price="Rp 84.575"
          desc='"Aku memang bukan cinta pertamamu, tapi izinkan aku menjadi cinta terakhir yang menghadirkan surga untukmu.”

          Pertemuan pertama kita memang tidak menciptakan kesan yang indah, tapi mampu membuat namamu terukir dalam hatiku. Sungguh, segala hal tentangmu mampu membuat hatiku berdebar-debar.'
          category="Romantis"
          image="https://cdn.gramedia.com/uploads/picture_meta/2024/2/9/bhcjp6bwe7sua6b4vwscht.jpg"
        />
        <BookCard
          title="Metropop: Wish Me Luck"
          author="RANIEVA"
          price="Rp 63.200"
          desc="Karier Sekar sebagai Risk Head sebuah bank ternama sedang menanjak ketika Banyu Agraprana muncul dalam hidupnya. Entah mengapa Sekar merasa kesialan demi kesialan muncul seiring ajakan kencan dari Banyu. Mendadak saja, rekan kerja"
          category="Novel"
          image="https://cdn.gramedia.com/uploads/picture_meta/2023/5/28/habxvqt6wth8g5exjquefb.jpg"
        />
        <BookCard
          title="Menulis dengan Cinta"
          author="Anton Kurnia"
          price="Rp 69.000"
          desc="Tahu kau mengapa aku sayangi kau lebih dari siapa pun? Karena kau menulis. Suaramu takkan padam ditelan angin, akan abadi, sampai jauh, jauh di kemudian hari.” —Pramoedya Ananta Toer. Di dalam buku ini dibahas sekelumit dasar-dasar penulisan fiksi dan nonfiksi kreatif, termasuk teknik menulis dan aspek-aspek"
          category="Sastra"
          image="https://cdn.gramedia.com/uploads/items/Menulis_Dengan_Cinta.jpg"
        />
      </div>
      <Pagination />
    </>
  );
}
