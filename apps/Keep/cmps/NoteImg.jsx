const {Link} = ReactRouterDOM

export function NoteImg({ note }) {
    return (

        <div className="note" style={{backgroundColor: note.bgColor}}>
            
            
            
            <img src={note.info.url} alt=""/>
            <Link to={`/keep/${note.id}`}>
                <i className="fas fa-edit"></i>
            </Link>
        </div>
    )
}