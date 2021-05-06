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
        filterBy: {
            title: ''
        },
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
                console.log('emails', emails);
                this.setState({ emails })
                //eventBusService.emit('email-count', email.length)
            })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy: { ...this.state.filterBy, ...filterBy } }, this.loadBooks)
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
    onDeleteEmail = () => {
        console.log('delete')
        emailService.deleteEmail(this.state.email.id)
            .then(() => {
                this.props.history.push('/mail')
            })
    }
    onEmailMoveToTrash = (id) => {
        emailService.deleteEmail(id)
        this.loadEmails()
    }

    render() {
        const { emails, filterBy, isNewEmailShown, newEmail: { sendTo, subject, body } } = this.state

        if (!emails) return <div>Loading...</div>
        const unreadCount = emails.filter(({ isRead }) => !isRead).length
        return (

            <section className="container email-app">
                <div>{unreadCount} unread</div>
                {/* <EmailFilter onSetFilter={this.onSetFilter} /> */}

                <div className="sidebar">
                    <button className="compose-btn"onClick={() => this.setState({ isNewEmailShown: true })} >
                        Compose
                </button>
                    <div><NavLink to="/mail/inbox">Inbox ({unreadCount})</NavLink></div>
                    <div><NavLink to="/mail/starred">Starred</NavLink></div>
                    <div><NavLink to="/mail/trash">Trash</NavLink></div>
                </div>

                <div className="content">
                    <Switch>
                        <Route component={EmailDetails} path="/mail/content/:emailId/" />
                        <Route path="/mail/inbox" render={(props) => (
                            <Inbox {...props} onEmailSetRead={this.onEmailSetRead} 
                            onEmailMoveToTrash={this.onEmailMoveToTrash} emails={emails} />
                        )} />
                         <Route path="/mail/starred" render={(props) => (
                            <Starred {...props} onEmailSetRead={this.onEmailSetRead} emails={emails} />
                        )} />
                         <Route path="/mail/trash" render={(props) => (
                            <Trash {...props} onEmailSetRead={this.onEmailSetRead} emails={emails} />
                        )} />
                    </Switch>
                </div>
                {
                    isNewEmailShown && (
                        <div className="compose-mail">
                            <input value={sendTo} onChange={(event) => this.onSetNewEmailField({
                                sendTo: event.target.value
                            })} placeholder="Recipient" type="text" />
                            <input value={subject} onChange={(event) => this.onSetNewEmailField({
                                subject: event.target.value
                            })} placeholder="Subject" type="text" />
                            <textarea value={body} onChange={(event) => this.onSetNewEmailField({
                                body: event.target.value
                            })} placeholder="Email body..." name="" id="" cols="30" rows="10"></textarea>
                            <div onClick={() => this.sendEmail(sendTo, subject, body)}>Send</div>
                        </div>
                    )
                }
            </section>
        )
    }
}