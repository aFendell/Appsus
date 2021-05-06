import { DynamicCmp } from './DynamicCmp.jsx';
import { NoteAdd } from './NoteAdd.jsx';


export function NoteList(props) {
    return(
        <div className="list-container">
            <div className="note-add">
            <NoteAdd loadNotes={props.loadNotes}/>
            </div>
            <div  className="note-list">
            {props.notes.map(note => <DynamicCmp note={note} key={note.id}/>)}
            </div>
        </div>
    )
}