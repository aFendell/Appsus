import { keepService } from "../services/keep-service.js"

export class NoteAdd extends React.Component {
    state = {
        noteType: "txt",
        noteTxt: ""
    }

    handelChange = (ev) => {
        // const field = ev.target.name
        // console.log('field:', field);
        const value = ev.target.value
        // console.log('value:', value);
        return this.setState({ noteTxt: value })
    }


    onSetType = (ev) => {
        ev.preventDefault()
        const type = ev.target.name
        return this.setState({ noteType: type })
    }

    onCreateNote = () => {
        const { noteType, noteTxt } = this.state
        keepService.createNote(noteType, noteTxt).then(() => {
            console.log('new note');
            return this.setState({noteType: "txt", noteTxt: ""})
            // return this.props.history.push('/keep')
        })
    }

    render() {
        const { type, txt } = this.state
        return (

                <form onSubmit={this.onCreateNote}>
                
                
                    <label htmlFor="note"></label>
                    <input type="text" id="note" name={type} placeholder="What's on you'r mind..." value={txt}
                        onChange={this.handelChange} />
                    <div className="control-panel">
                    <button name="txt" onClick={this.onSetType}><i className="fa fa-font"></i></button>
                    <button name="img" onClick={this.onSetType}><i className="fa fa-image"></i></button>
                    <button name="list" onClick={this.onSetType}><i className="fa fa-list"></i></button>
                    <button name="video" onClick={this.onSetType}><i className="fa fa-youtube"></i></button>
                    <button><i className="fa fa-plus"></i></button>
                    </div>

                </form>

        )
    }

}