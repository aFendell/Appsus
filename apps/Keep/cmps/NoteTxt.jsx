const {Link} = ReactRouterDOM

export function NoteTxt({ note }) {
    return (

        <div className="note">
            <Link to={`/keep/${note.type}/${note.id}`}>
            <h3>{note.info.title}</h3>
            <div>{note.info.txt}</div>
            </Link>

        </div>
    )
}