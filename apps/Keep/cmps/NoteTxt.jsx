const { Link } = ReactRouterDOM

export function NoteTxt({ note }) {
    return (

        <div className="note" style={{ backgroundColor: note.bgColor }} contentEditable="true" suppressContentEditableWarning={true}>
                <h3>{note.info.title}</h3>
                <p>{note.info.txt}</p>
            <div className="edit-btn">
            <Link to={`/keep/${note.id}`}>
                <i className="fas fa-edit"></i>
            </Link>
                </div>    
            
            

        </div>
    )
}