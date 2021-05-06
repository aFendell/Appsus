import { DynamicCmp } from './DynamicCmp.jsx';
import { NoteAdd } from './NoteAdd.jsx';


export function NoteList({ notes }) {
    return(
        <div className="note-list">
            <NoteAdd/>
            {notes.map(note => <DynamicCmp note={note} key={note.id}/>)}
        </div>
    )
}