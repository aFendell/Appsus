import { keepService } from "../services/keep-service.js"

const { Link } = ReactRouterDOM

// export function NoteTxt({ note }) {
export class NoteTxt extends React.Component {

    handleChange = (ev) => {
        const currTxt = ev.target.innerText
        const { note } = this.props
        note.info.txt = currTxt
        keepService.saveNote(note)
    }

    render() {
        const { note } = this.props
        return (

            <div className="note" style={{ backgroundColor: note.bgColor }}>
                <div id={note.id} className="note-txt"
                    contentEditable="true" onInput={ev => this.handleChange(ev)} suppressContentEditableWarning={true} >
                    <h3>{note.info.title}</h3>
                    <p>{note.info.txt}</p>
                </div>
                <div className="details-btn">
                    <Link to={`/keep/${note.id}`}>
                        <i className="fas fa-edit"></i>
                    </Link>
                </div>
            </div>
        )
    }
}