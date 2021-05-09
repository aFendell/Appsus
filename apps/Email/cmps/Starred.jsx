// import { EmailPreview } from './EmailPreview.jsx'
// export function Starred({ emails, onEmailSetStar }) {
//   console.log(emails)
//   const starredEmails = emails.filter((email) => email.isStar)
//   return (
//     <div className="email-list">
//       {starredEmails.map(email => <EmailPreview onEmailSetStar={onEmailSetStar} email={email} key={email.id} />)}
//     </div>
//   )
// }
import { EmailPreview } from './EmailPreview.jsx'
export function Starred({ emails, onSetEmailStar }) {

const markUnStar = (event, emailId) => {
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



  const starEmails = emails.filter((email) => email.isStar)
  return (
    <div className="email-list">
      {starEmails.map(email => <EmailPreview
        email={email} key={email.id}
        // actions={[
        //   email.isStar && <button className="star" onClick={(event) => markUnStar(event, email.id)}><i class="fas fa-star"></i></button>,
        //   !email.isStar && <button className="star" onClick={(event) => markStar(event, email.id)}><i class="far fa-star"></i></button>
        // ]}

      />)}
    </div>)
}





