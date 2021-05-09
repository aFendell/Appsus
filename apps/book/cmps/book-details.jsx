export function BookDetails({ book ,goBack}) {
  var pageCount = book.pageCount;
  var msgPageCount;
  var publishedDate = book.publishedDate;
  var msgPublishedDate;
  var price = book.listPrice.amount;
  var priceClass;
  if (price > 150) priceClass = 'red';
  else if (price < 20) priceClass = 'green';
  if (pageCount > 500) msgPageCount = 'Longreading';
  else if (pageCount > 200) msgPageCount = 'Decent Reading';
  else if (pageCount < 100) msgPageCount = 'Light Reading';
  if (publishedDate > 10) msgPublishedDate = 'Veteran Book';
  else if (publishedDate < 1) msgPublishedDate = 'New!';

  return (
    <div className="book-details">
      <img src={book.thumbnail} alt="" />
      <p>Title - {book.title}</p>
       
      <p className="price-class" >Price -{price}</p>
      <p> {msgPageCount}</p>
      <p> {msgPublishedDate}</p>
      {book.description}
      <button onClick={goBack}>Go back</button>

    </div>
  )
}