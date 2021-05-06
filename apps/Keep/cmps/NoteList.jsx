import { DynamicCmp } from './DynamicCmp.jsx';
import { NoteAdd } from './NoteAdd.jsx';


export function NoteList({ notes }) {
    return(
        <div className="list-container">
            <div className="note-add">
            <NoteAdd/>
            </div>
            <div  className="note-list">
            {notes.map(note => <DynamicCmp note={note} key={note.id}/>)}
            </div>
        </div>
    )
}