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
            return this.props.history.push('/keep') // Need fixing
        })
    }

    render() {
        const { type, txt } = this.state
        return (
            <div className="note-add">

                <form onSubmit={this.onCreateNote}>

                    <label htmlFor="note"></label>
                    <input type="text" id="note" name={type} placeholder="What's on you'r mind..." value={txt}
                        onChange={this.handelChange} />
                    <div className="btn">
                    <button name="txt" onClick={this.onSetType}>Txt Note</button>
                    <button name="img" onClick={this.onSetType}>Img Note</button>
                    <button name="list" onClick={this.onSetType}>List Note</button>
                    <button name="video" onClick={this.onSetType}>Video Note</button>
                    <button>+</button>
                    </div>

                </form>
            </div>
        )
    }

}