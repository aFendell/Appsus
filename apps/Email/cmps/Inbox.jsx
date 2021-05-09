import { EmailPreview } from './EmailPreview.jsx'
export function Inbox({ emails, onEmailSetRead, onEmailMoveToTrash,onEmailSetStar }) {
  
  const filteredEmails = emails.filter((email) => !email.isTrash)
  const markUnread = (event, emailId) => {
    event.stopPropagation()
    event.preventDefault()
    onEmailSetRead(emailId, false)
}

const markread = (event, emailId) => {
  console.log(event)
  console.log(emailId)
  event.stopPropagation()
  event.preventDefault()
  onEmailSetRead(emailId, true)
}

const markUnStar = (event, emailId) => {
  console.log(event)
  console.log(emailId)
  console.log('mark unstar')
  event.stopPropagation()
  event.preventDefault()
  onEmailSetStar(emailId, false)
  
}

const markStar = (event, emailId) => {
  console.log('mark star')
  event.stopPropagation()
  event.preventDefault()
  onEmailSetStar(emailId, true)
}




  return (
    <div className="email-list">
      {
      filteredEmails.map(email => <EmailPreview 
        onEmailSetRead={onEmailSetRead} email={email} key={email.id}
        
        actions={[
          // email.isStar && <button className="star" onClick={(event) => markUnStar(event, email.id)}><i class="fas fa-star"></i></button>,
          // !email.isStar && <button className="star" onClick={(event) => markStar(event, email.id)}><i class="far fa-star"></i></button>,
          email.isRead && <button className="btn-env" onClick={(event) => markUnread(event, email.id)}><i class="far fa-envelope-open"></i></button>,
          !email.isRead && <button className="btn-env" onClick={(event) => markread(event, email.id)}><i class="far fa-envelope"></i></button>,
          <button  className="trash" onClick={(event) => onEmailMoveToTrash(event, email.id)}>
           <i class="far fa-trash-alt"></i></button>
      
        ]}
          
        />)}
    </div>
  )
}

