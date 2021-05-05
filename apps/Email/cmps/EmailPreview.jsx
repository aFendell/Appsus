const { Link } = ReactRouterDOM

export function EmailPreview({ email, onEmailSetRead }) {
    const previewClass = (email.isRead) ? '' : 'unread'

    const markUnread = (event, emailId) => {
        event.stopPropagation()
        event.preventDefault()
        onEmailSetRead(emailId, false)
    }

    return (
        
        <article className={'email-preview ' + previewClass}>
             <Link to={`/mail/${email.id}`}>
                {email.sendTo} | {email.subject} | {email.body} | {email.sentAt} | {email.isRead && <button onClick={(event) => markUnread(event, email.id)}>Mark unread</button>}
            </Link>

           
        </article>
    )
}