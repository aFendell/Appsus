const {Link} = ReactRouterDOM

export function NoteTxt({ note }) {
    return (

        <div className="note" style={{backgroundColor: note.bgColor}}>
            <Link to={`/keep/${note.id}`}>
            <h3>{note.info.title}</h3>
            <div>{note.info.txt}</div>
            </Link>

        </div>
    )
}