const { Link } = ReactRouterDOM

export function EmailPreview({ email, onEmailSetRead, actions }) {
    const previewClass = (email.isRead) ? '' : 'unread'


    return (
        
        <article className={'email-preview ' + previewClass}>
             <Link to={`/mail/content/${email.id}`}>
                {email.isStar ? '!!!' : ''} | {email.sendTo} | {email.subject} | {email.body} | {email.sentAt} | {actions}
            </Link>
           
        </article>
    )
}