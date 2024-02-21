import { getBooks } from "@/app/lib/data";
import BookCard from "../Card";

async function BooksList() {
  const data = await getBooks();
  const books = await data.data;

  return (
    <div className="grid grid-cols-3 gap-3 mb-7">
      {books.map((book) => {
        return (
          <BookCard
            title={book.title}
            price={book.price}
            desc={book.description}
            category={book.categories.data.name}
            image="https://cdn.gramedia.com/uploads/picture_meta/2023/5/28/7kgcvsvkzz9qy979jbbvmf.jpg"
            key={book.id}
          />
        );
      })}
    </div>
  );
}

export default BooksList;
