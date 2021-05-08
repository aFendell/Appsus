import { EmailPreview } from './EmailPreview.jsx'
export function Inbox({ emails, onEmailSetRead, onEmailMoveToTrash }) {
  
  const filteredEmails = emails.filter((email) => !email.isTrash)
  const markUnread = (event, emailId) => {
    event.stopPropagation()
    event.preventDefault()
    onEmailSetRead(emailId, false)
}

const markread = (event, emailId) => {
  event.stopPropagation()
  event.preventDefault()
  onEmailSetRead(emailId, true)
}

  return (
    <div className="email-list">
      {
      filteredEmails.map(email => <EmailPreview 
        onEmailSetRead={onEmailSetRead} email={email} key={email.id}
        actions={[
          email.isRead && <button className="btn-env" onClick={(event) => markUnread(event, email.id)}><i class="far fa-envelope-open"></i></button>,
          !email.isRead && <button className="btn-env" onClick={(event) => markread(event, email.id)}><i class="far fa-envelope"></i></button>,
          <button  className="trash" onClick={(event) => onEmailMoveToTrash(event, email.id)}>
           <i class="far fa-trash-alt"></i></button>
      
        ]}
          
        />)}
    </div>
  )
}

