const { Link } = ReactRouterDOM

export function NoteImg({ note }) {
    return (

        <div className="note" style={{ backgroundColor: note.bgColor }}>



            <img src={note.info.url} alt="" />
            <div className="edit-btn">
                <Link to={`/keep/${note.id}`}>
                    <i className="fas fa-edit"></i>
                </Link>
            </div>
        </div>
    )
}