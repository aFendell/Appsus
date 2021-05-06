import { EmailPreview } from './EmailPreview.jsx'
export function Trash({ emails, onEmailUntrash }) {
  const trashEmails = emails.filter((email) => email.isTrash)
  return (
    <div className="email-list">
      {trashEmails.map(email => <EmailPreview onEmailUntrash={onEmailUntrash} email={email} key={email.id} />)}
    </div>
  )
}

