export function NoteImg({ note }) {
    return (

        <div className="note">
            {/* <h3>{note.info.title}</h3> */}
            <img src={note.info.url} alt=""/>
            {/* <div>{note.info.txt}</div> */}

        </div>
    )
}