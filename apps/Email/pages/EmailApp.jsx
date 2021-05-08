const { Route, Switch, NavLink } = ReactRouterDOM
import { emailService } from '../services/email-service.js'
import { eventBusService } from '../services/event-bus-service.js'
import { EmailList } from '../cmps/EmailList.jsx'
import { EmailAdd } from '../pages/EmailAdd.jsx'

import { EmailFilter } from '../cmps/EmailFilter.jsx'
import { EmailDetails } from './EmailDetails.jsx'
import {Inbox} from '../cmps/Inbox.jsx'
import {Starred} from '../cmps/Starred.jsx'
import {Trash} from '../cmps/Trash.jsx'

export class EmailApp extends React.Component {
    state = {
        emails: null,
        filterBy: '',
     
        newEmail: {

        }
    }
    componentDidMount() {
        // console.log('EmailUp')
        this.loadEmails()
    }

    loadEmails() {
        console.log('load')
        emailService.query(this.state.filterBy)
            .then((emails) => {
                //console.log('emails', emails);
                this.setState({ emails })
                //eventBusService.emit('email-count', email.length)
            })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy}, this.loadEmails)
    }
    

    onSetNewEmailField = (updates) => {
        this.setState({ newEmail: { ...this.state.newEmail, ...updates } })
    }

    sendEmail = (sendTo, subject, body) => {
        emailService.addEmail(sendTo, subject, body)
        this.setState({ isNewEmailShown: false })
        this.loadEmails()
    }

    onEmailSetRead = (emailId, isRead) => {
        emailService.setEmailRead(emailId, isRead)
        this.loadEmails()
    }
     
    onEmailSetStar = (emailId, isStar) => {
        console.log('star')
        emailService.setEmailStar(emailId, isStar)
        this.loadEmails()
    }
    onDeleteEmail = () => {
        console.log('delete')
        emailService.deleteEmail(this.state.email.id)
            .then(() => {
                this.props.history.push('/mail')
            })
    }
    onEmailMoveToTrash = (event, id) => {
        event.stopPropagation()
        event.preventDefault()
        emailService.setEmailTrash(id, true)
        this.loadEmails()
    }
    untrashEmail = (event, id) => {
        event.stopPropagation()
        event.preventDefault()
        emailService.setEmailTrash(id, false)
        this.loadEmails()
    }
    onEmailDelete = (event, id) => {
        event.stopPropagation()
        event.preventDefault()
        emailService.deleteEmail(id)
        this.loadEmails()
    }

    render() {
        const { emails, filterBy, isNewEmailShown, newEmail: { sendTo, subject, body } } = this.state
         console.log('render',emails)
        if (!emails) return <div>Loading...</div>
       
        const unreadCount = emails.filter(({ isRead }) => !isRead).length
        return (

            <section className="container email-app">
                {/* <div>{unreadCount} unread</div> */}
                {/* <EmailFilter onSetFilter={this.onSetFilter} /> */}
                <EmailFilter onSetFilter={this.onSetFilter} />

                <div className="sidebar">
                    <button className="compose-btn"onClick={() => this.setState({ isNewEmailShown: true })} >
                    <label class="plus"><i class="fas fa-plus"></i></label> Compose
                </button>
                    <div className="inbox1"><NavLink to="/mail/inbox"><label className="inbox"><i className="fas fa-inbox"></i> </label>Inbox ({unreadCount})</NavLink></div>
                    <div  className="star1"><NavLink to="/mail/starred"><label className="star"><i className="fas fa-star"></i> </label>Starred</NavLink></div>
                    <div  className="trash1"><NavLink to="/mail/trash"><label className="trash"><i  className="far fa-trash-alt"></i> </label>Trash</NavLink></div>
                </div>

                <div className="content">
                    <Switch>
                        <Route render={(props) => (
                            <EmailDetails {...props} loadEmails={() => this.loadEmails()} />
                        )} path="/mail/content/:emailId/" />
                        <Route path="/mail/inbox" render={(props) => (
                            <Inbox {...props} className="side-inbox" onEmailSetRead={this.onEmailSetRead} 
                            onEmailMoveToTrash={this.onEmailMoveToTrash} emails={emails} />
                        )} />
                         <Route path="/mail/starred" render={(props) => (
                            <Starred {...props} onEmailSetStar={this.onEmailSetStar} emails={emails} />
                        )} />
                         <Route path="/mail/trash" render={(props) => (
                            <Trash {...props} onEmailDelete={this.onEmailDelete}  untrashEmail={this.untrashEmail} emails={emails} />
                        )} />
                    </Switch>
                </div>
                {
                    isNewEmailShown && (
                        <div className="compose-mail">
                            <input className="header" value={sendTo} onChange={(event) => this.onSetNewEmailField({
                                sendTo: event.target.value
                            })} placeholder="Recipient" type="text" />
                            <input value={subject} onChange={(event) => this.onSetNewEmailField({
                                subject: event.target.value
                            })} placeholder="Subject" type="text" />
                            <textarea value={body} onChange={(event) => this.onSetNewEmailField({
                                body: event.target.value
                            })} placeholder="Email body..." name="" id="" cols="30" rows="10"></textarea>
                            <div onClick={() => this.sendEmail(sendTo, subject, body)}><label className="plane"><i class="far fa-paper-plane"></i></label>  Send</div>
                        </div>
                    )
                }
            </section>
        )
    }
}