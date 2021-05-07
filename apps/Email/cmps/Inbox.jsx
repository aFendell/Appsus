import { EmailPreview } from './EmailPreview.jsx'
export function Inbox({ emails, onEmailSetRead, onEmailMoveToTrash }) {
  
  const filteredEmails = emails.filter((email) => !email.isTrash)
  const markUnread = (event, emailId) => {
    event.stopPropagation()
    event.preventDefault()
    onEmailSetRead(emailId, false)
}

  return (
    <div className="email-list">
      {
      filteredEmails.map(email => <EmailPreview 
        onEmailSetRead={onEmailSetRead} email={email} key={email.id}
        actions={[
          email.isRead && <button onClick={(event) => markUnread(event, email.id)}>Mark unread</button>,
          <button onClick={(event) => onEmailMoveToTrash(event, email.id)}>🗑</button>
        ]}
          
        />)}
    </div>
  )
}

