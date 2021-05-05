import { EmailPreview } from './EmailPreview.jsx'
export function EmailList({ emails, onEmailSetRead }) {
  return (
    <div className="email-list">
      {emails.map(email => <EmailPreview onEmailSetRead={onEmailSetRead} email={email} key={email.id} />)}
    </div>
  )
}

