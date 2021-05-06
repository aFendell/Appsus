import { EmailPreview } from './EmailPreview.jsx'
export function Starred({ emails, onEmailSetRead }) {
  const starredEmails = emails.filter((email) => email.isStar)
  return (
    <div className="email-list">
      {starredEmails.map(email => <EmailPreview onEmailSetRead={onEmailSetRead} email={email} key={email.id} />)}
    </div>
  )
}

