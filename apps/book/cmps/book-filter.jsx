export class BookFilter extends React.Component {
 
  state = {
    filterBy: {
      title: '',
      price: ''
    }
  }

//   componentDidMount() {
//     console.log(this.handleChange);
// }

  handleChange = (ev) => {
    //console.log(ev.target)
    const field = ev.target.name
    const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
    this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
      this.props.onSetFilter(this.state.filterBy)
    })
  }

  onFilter = (ev) => {
    ev.preventDefault()
    this.props.onSetFilter(this.state.filterBy)
  }

  render() {
    const { title, price } = this.state.filterBy
    return (

      <form className="book-filter" onSubmit={this.onFilter}>
        <label htmlFor="byTitle">By Tytle</label>
        <input type="text" id="byTitle" name="title"
          value={title} onChange={this.handleChange} />
        <label htmlFor="byPrice">By Price</label>
        <input type="number" id="byPrice" name="price"
          value={price} onChange={this.handleChange} />
        <button>Filter</button>
      </form>
    )
  }
}