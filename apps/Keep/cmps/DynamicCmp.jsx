import { NoteTxt } from "./NoteTxt.jsx";
import { NoteImg } from "./NoteImg.jsx";

export function DynamicCmp({ note }) {

    switch (note.type) {
        case 'txt':
            return <NoteTxt note={note}/>
        case 'img':
            return <NoteImg note={note} />
    }


    return (
        <div>
            hi
        </div>
    )
}
