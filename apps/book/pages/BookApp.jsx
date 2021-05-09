import { bookService } from '../services/book.service.js'
import { BookList } from '../cmps/book-list.jsx'
import { BookFilter } from '../cmps/book-filter.jsx'
import { BookDetails } from '../cmps/book-details.jsx'
import { BookTxt } from '../cmps/book-txt.jsx'
export class BookApp extends React.Component {
    state = {
        books: null,
        filterBy: null,
        selectedBook: null
    }
    componentDidMount() {
        //console.log('Mount!');
        this.loadBooks()//get books from storage
    }

    loadBooks() {
        bookService.query(this.state.filterBy)
            .then((books) => {
                //console.log(books);
                this.setState({ books })
            })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks)
    }

    setSelectedBook = (book) => {
        this.setState({ selectedBook: book })
    }

    onDeleteBook = (bookId) => {
        bookService.deleteBook(bookId)
        this.setSelectedBook(null)
        this.loadBooks()
    }


    goBack = () => {
        this.setState({ selectedBook: null })
    }

    render() {
        //console.log('RENDER!', this.state.books);
        const { books, selectedBook } = this.state

        if (!books) return <div>Loading...</div>
        return (
            <section className="book-app">
                <h2>Book Shop</h2>
                {!selectedBook && <React.Fragment>
                    <BookFilter onSetFilter={this.onSetFilter} />
                    <BookList books={books} setSelectedBook={this.setSelectedBook} />
                </React.Fragment>}

                {selectedBook &&
                    <BookDetails book={selectedBook} onSelectBook={this.onSelectBook}
                        goBack={this.goBack} />}

            </section>
        )
//     } <article className={'email-preview ' + previewClass}>
//     <Link to={`/mail/content/${email.id}`}>
//        {email.isStar ? '!!!' : ''} | {email.sendTo} | {email.subject} | {length} | {email.sentAt} 
//        {email.isRead && <React.Fragment>
//            <span><img className="img" src="assets/img/envelope.png" /></span>
//        </React.Fragment>}
//        {!email.isRead && <React.Fragment>
//            <span><img className="img" src="assets/img/.png" /></span>
//        </React.Fragment>}

//    </Link>
  
// </article>

}
}