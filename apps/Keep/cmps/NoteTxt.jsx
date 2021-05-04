export function NoteTxt({ note }) {
    return (

        <div className="note">

            <h3>{note.info.title}</h3>
            <div>{note.info.txt}</div>

        </div>
    )
}