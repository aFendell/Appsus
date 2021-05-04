const { Link } = ReactRouterDOM

export function EmailPreview({ email }) {
    const previewClass = (email.isRead) ? 'read' : ''
    return (
        
        <article className={'email-preview ' + previewClass}>
             <Link to={`/mail/${email.id}`}>
             {email.sendTo} {email.subject} {email.body}
           </Link>

           
        </article>
    )
}