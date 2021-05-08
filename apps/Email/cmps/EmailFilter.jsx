export class EmailFilter extends React.Component {

    state = {
        filterBy: {
            sendTo: ''
        }
    }

    //   componentDidMount() {
    //     console.log(this.handleChange);
    // }

    // handleChange = (ev) => {
    //     //console.log(ev.target.name)
    //     //console.log(ev.target.value)
    //     const field = ev.target.name
    //     const value = ev.target.value
    //     this.setState({ filterBy: this.state.filterBy }, () => {
    //         this.props.onSetFilter(this.state.filterBy)
    //     })
    // }
    handleChange = (ev) => {
        //console.log(ev.target)
        const field = ev.target.name
        const value = ev.target.value
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
          this.props.onSetFilter(this.state.filterBy)
        })
         
      }
    


    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { sendTo } = this.state.filterBy
        return (

            <form className="email-filter" onSubmit={this.onFilter}>
                <label htmlFor="bySendto"></label>
                <input className="filter" placeholder="search 🔎"type="text" id="bySendTo" name="sendTo"
                    value={sendTo}  onChange={this.handleChange} />

            </form>
        )
    }
}


// state = {
//     filterBy: {
//         title: '',
//         price: ''
//     }
// }

// //   componentDidMount() {
// //     console.log(this.handleChange);
// // }

// handleChange = (ev) => {
//     //console.log(ev.target)
//     const field = ev.target.name
//     const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
//     this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
//         this.props.onSetFilter(this.state.filterBy)
//     })
// }

// onFilter = (ev) => {
//     ev.preventDefault()
//     this.props.onSetFilter(this.state.filterBy)
// }

// render() {
//     const { title, price } = this.state.filterBy
//     return (

//         <form className="book-filter" onSubmit={this.onFilter}>
//             <label htmlFor="byTitle">By Tytle</label>
//             <input type="text" id="byTitle" name="title"
//                 value={title} onChange={this.handleChange} />
//             <label htmlFor="byPrice">By Price</label>
//             <input type="number" id="byPrice" name="price"
//                 value={price} onChange={this.handleChange} />
//             <button>Filter</button>
//         </form>
//     )
// }
//   }