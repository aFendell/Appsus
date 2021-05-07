import { keepService } from "../services/keep-service.js"
import {KeepApp} from "../pages/KeepApp.jsx"

export class NoteAdd extends React.Component {
    state = {
        noteType: "txt",
        noteStr: "",
        inputPlaceholder: "Keep Somthing"
    }

    handelChange = (ev) => {
        // const field = ev.target.name
        // console.log('field:', field);
        const value = ev.target.value
        // console.log('value:', value);
        return this.setState({ noteStr: value })
    }


    onSetType = (ev) => {
        ev.preventDefault()
        const type = ev.target.name
        // this.setPlaceholder(type)
        return this.setState({ noteType: type })
    }

    setPlaceholder = (type) => {
        var placeholder = ""
        if (type = "txt") placeholder = "What's on you'r mind..."
        if (type = "img") placeholder = "Enter image URL"
        if (type = "list") placeholder = "Enter comma separated list"
        if (type = "video") placeholder = "Enter video URL"
        return this.setState({ inputPlaceholder: placeholder})
    }

    onCreateNote = (ev) => {
        ev.preventDefault()
        const { noteType, noteStr } = this.state
        keepService.createNote(noteType, noteStr).then(() => {
            return this.setState({noteType: "txt", noteStr: ""})
        })
        ev.target.reset()
        this.props.loadNotes()
    }

    render() {
        const { noteType, noteStr, inputPlaceholder } = this.state
        return (
                <form onSubmit={this.onCreateNote}>
                    <label htmlFor="note"></label>
                    <input type="text" id="note" name={noteType} placeholder={inputPlaceholder} value={noteStr}
                        onChange={this.handelChange} />
                    <div className="control-panel">
                    <button name="txt" onClick={this.onSetType}><i className="fas fa-font"></i></button>
                    <button name="img" onClick={this.onSetType}><i className="far fa-image"></i></button>
                    <button name="list" onClick={this.onSetType}><i className="fas fa-list"></i></button>
                    <button name="video" onClick={this.onSetType}><i className="fab fa-youtube"></i></button>
                    <button><i className="fas fa-plus"></i></button>
                    </div>
                </form>
        )
    }

}