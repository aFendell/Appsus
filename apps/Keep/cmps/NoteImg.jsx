const {Link} = ReactRouterDOM

export function NoteImg({ note }) {
    return (

        <div className="note">
            <Link to={`/keep/${note.id}`}>
            <img src={note.info.url} alt=""/>
            </Link>
        </div>
    )
}