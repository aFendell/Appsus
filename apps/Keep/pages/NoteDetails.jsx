const { Link } = ReactRouterDOM
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

    handleChange = ({ target }) => {
        console.log('target changed');
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({
            note: {
                ...prevState.note,
                [field]: value
            }
        }), () => keepService.saveNote(this.state.note))
    }

    // onChangeColor = (ev) => {
    //     console.log('color value:', ev.target.value);
    //     const color = ev.target.value
    //     const bgColor = this.state.note.bgColor
    //     console.log('color to set:', color);
    //     this.setState({ bgColor: color })
    //     console.log('changed state color:', this.state.note.bgColor);
    // }

    render() {
        const { note } = this.state
        if (!note) return <div>Loading...</div>
        return (
            <div className="note-details">
                <DynamicCmp note={note} />
                <div className="note-controls">
                    <label htmlFor="set-color" className="set-color">
                        <i className="fa fa-palette"></i>
                        <input className="display-none" name="bgColor" type="color" onInput={this.handleChange} id="set-color" />
                    </label>

                    <button >
                        <i className="fas fa-edit"></i>
                    </button>
                    <button onClick={this.onDeleteNote}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                    <Link to={`/keep`}><i className="fas fa-arrow-left"></i></Link>
                

                </div>
            </div>
        )

    }
}