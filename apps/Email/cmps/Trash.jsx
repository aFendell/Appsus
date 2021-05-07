import { EmailPreview } from './EmailPreview.jsx'
export function Trash({ emails, untrashEmail, onEmailDelete }) {
  const trashEmails = emails.filter((email) => email.isTrash)
  return (
    <div className="email-list">
      {trashEmails.map(email => <EmailPreview 
        email={email} key={email.id} 
        actions={[
          <button onClick={(event) => untrashEmail(event, email.id)}>untrash</button>,
          <button onClick={(event) => onEmailDelete(event, email.id)}>X</button>
        ]}
      />)}
    </div>
  )
}

