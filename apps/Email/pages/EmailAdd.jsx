import { emailService } from '../services/email-service.js'

export class EmailAdd extends React.Component {

    state = {
        email: {
            sendTo: '',
            msg: ''
        }
    }

    componentDidMount() {
        console.log('add')
        //const id = this.props.match.params.emailId
        // if (!id) return//add
        // emailService.getEmailById(id).then(email => {//edit
            // this.setState({ email })
       // })
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({
            book: {
                ...prevState.book,
                [field]: value
            }
        }))
    }

    onSaveBook = (ev) => {
        ev.preventDefault()
        const { book } = this.state
        console.log(book)
        if (!book.title) return alert('Must fill title field')
        bookService.saveBook(this.state.book).then(() => {
            this.props.history.push('/book')
        })
    }

    render() {
        const { title, price, id } = this.state.book
        return (
            <form className="book-edit" onSubmit={this.onSaveBook}>
                <h1>{id ? 'Edit' : 'Add'} Book</h1>
                <label>Title
          <input type="text" name="title" value={title} onChange={this.handleChange} />
                </label>
                <label>Price
          <input type="number" name="price" value={price} onChange={this.handleChange} />
                </label>
                <button>Save</button>
            </form>
        )
    }
}