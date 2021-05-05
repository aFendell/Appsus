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
        const id = this.props.match.params.noteId
        // console.log('load note id:', id);
        keepService.getNoteById(id).then(note => {
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

    render() {
        // console.log(this.state.note);
        const { note } = this.state
        if (!note) return <div>Loading...</div>
        return (
            <div className="note-details">
                <DynamicCmp note={note} key={note.id} />
                <div className="note-controls">
                    <button onClick={this.onDeleteNote}>Delete Note</button>
                </div>
            </div>
        )

    }
}

