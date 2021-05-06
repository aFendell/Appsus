const {Link} = ReactRouterDOM

export function NoteImg({ note }) {
    return (

        <div className="note" style={{backgroundColor: note.bgColor}}>
            <Link to={`/keep/${note.id}`}>
            <img src={note.info.url} alt=""/>
            </Link>
        </div>
    )
}