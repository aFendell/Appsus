import { BookPreview } from './book-preview.jsx'
export function BookList({ books, setSelectedBook }) {
  return (
    <div className="book-list">
      { books.map(book => <BookPreview book={book} key={book.id} setSelectedBook={setSelectedBook} />)}
    </div>
  )
}