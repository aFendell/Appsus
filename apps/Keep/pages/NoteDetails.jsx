import { keepService } from "../services/keep-service.js"
import { DynamicCmp } from '../cmps/DynamicCmp.jsx';


export class NoteDetails extends React.Component {
    state = {
        note: null
    }

    componentDidMount() {
        // console.log('note details did mount');
        this.loadNote()
    }

    loadNote() {
        const { noteId } = this.props.match.params
        keepService.getNoteById(noteId).then(note => {
            if (!note) this.props.history.push('/')
            this.setState({ note })
        })
    }

    onDeleteNote = () => {
        keepService.deleteNote(this.state.note.id).then(() => {
            this.props.history.push('/keep')
            console.log('note deleted');
        })
    }

    onChangeColor = (ev) => {
        console.log('color value:', ev.target.value);
        const color = ev.target.value
        // this.setState({})
    }


    render() {
        const { note } = this.state
        if (!note) return <div>Loading...</div>
        return (
            <div className="note-details">
                <DynamicCmp note={note} />
                <div className="note-controls">

                    {/* <button >
                        <i className="fa fa-palette">
                            <input className="" type="color" name="" id="" />
                        </i>
                    </button> */}

                    <label htmlFor="set-color" className="set-color">
                        <i className="fa fa-palette"></i>
                        <input className="display-none" type="color" onChange={this.onChangeColor} id="set-color" />
                    </label>

                    <button >
                        <i className="fas fa-edit"></i>
                    </button>
                    <button onClick={this.onDeleteNote}>
                        <i className="fas fa-trash-alt"></i>
                    </button>

                </div>
            </div>
        )

    }
}

