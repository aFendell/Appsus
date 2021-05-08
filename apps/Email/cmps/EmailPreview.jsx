const { Link } = ReactRouterDOM

export function EmailPreview({ email, onEmailSetRead, actions }) {

    const previewClass = (email.isRead) ? '' : 'unread'
    //console.log(actions)
    //var length =email.body.substring(0,10) + "..."
    var length = email.body.length
    if (length > 15)
        length = email.body.substring(0, 12) + "...";
    else length = email.body;
    return (
        <article className={'email-preview ' + previewClass}>
            <Link to={`/mail/content/${email.id}`}>
                {email.isStar ? <label class="star"><i class="fas fa-star"></i></label> : <label class="star"><i class="far fa-star"></i></label>} | {email.sendTo} | {email.subject} | {length} | {email.sentAt}{actions}

                {/* {email.isRead && <React.Fragment>
                    <button><img className="img" src="assets/img/envelope.png"
                        onClick={() => { <img className="img" src="assets/img/message.png" /> }}
                    // onClick={() => this.setState({ isNewEmailShown: true })}
                    /></button>
                </React.Fragment>}
                {!email.isRead && <React.Fragment>
                    <span><img className="img" src="assets/img/message.png" /></span>
                </React.Fragment>} */}
            </Link>
        </article>
    )
}

