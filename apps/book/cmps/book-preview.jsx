export function BookPreview({ book, setSelectedBook }) {
    return (
      <article className="book-preview" onClick={() => setSelectedBook(book)}>
        <p> {book.title}</p>
        <img src={book.thumbnail} alt="" />
      </article>
    )
  }