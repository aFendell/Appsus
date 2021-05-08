const { Link } = ReactRouterDOM

export function EmailPreview({ email, onEmailSetRead, actions }) {
    
    const previewClass = (email.isRead) ? '' : 'unread'
   console.log(actions)
    var length =email.body.substring(0,10) + "..."
    return (
        
        <article className={'email-preview ' + previewClass}>
             <Link to={`/mail/content/${email.id}`}>
                {email.isStar ? '!!!' : ''} | {email.sendTo} | {email.subject} | {length} | {email.sentAt}{actions}

       {email.isRead && <React.Fragment>
           <button><img className="img" src="assets/img/envelope.png"
            onClick={() =>{<img className="img" src="assets/img/message.png" />}}
            onClick={() => this.setState({ isNewEmailShown: true })}
            /></button>
       </React.Fragment>}
       {!email.isRead && <React.Fragment>
           <span><img className="img" src="assets/img/message.png" /></span>
       </React.Fragment>}
   </Link>
</article>
    )
       }

        