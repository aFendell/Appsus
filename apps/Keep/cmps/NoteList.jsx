import { DynamicCmp } from './DynamicCmp.jsx';

export function NoteList({ notes }) {
    return(
        <div className="note-list">
            {notes.map(note => <DynamicCmp note={note} key={note.id}/>)}
        </div>
    )
}