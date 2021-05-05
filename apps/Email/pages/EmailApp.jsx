
const { NavLink } = ReactRouterDOM
import { emailService } from '../services/email-service.js'
import { eventBusService } from '../services/event-bus-service.js'
import { EmailList } from '../cmps/EmailList.jsx'
import { EmailAdd } from '../pages/EmailAdd.jsx'

import { EmailFilter } from '../cmps/EmailFilter.jsx'

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
        emailService.query(this.state.filterBy)// undefind
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
        this.setState({isNewEmailShown: false})
        this.loadEmails()
    }

    onEmailSetRead = (emailId, isRead) => {
        emailService.setEmailRead(emailId, isRead)
        this.loadEmails()
    }

    render() {
        const { emails, filterBy, isNewEmailShown, newEmail: {sendTo, subject, body} } = this.state

        if (!emails) return <div>Loading...</div>
        return (

            <section className="container email-app">
<div>{emails.filter(({isRead}) =>!isRead).length} unread</div>
                {/* <EmailFilter onSetFilter={this.onSetFilter} /> */}
                <EmailList onEmailSetRead={this.onEmailSetRead} emails={emails} />

                <div onClick={() => this.setState({isNewEmailShown: true})}>Add email</div>
                {
                    isNewEmailShown && (
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <input value={sendTo} onChange={(event) => this.onSetNewEmailField({
                                sendTo: event.target.value
                            })} placeholder="Recipient" type="text"/>
                            <input value={subject} onChange={(event) => this.onSetNewEmailField({
                                subject: event.target.value
                            })} placeholder="Subject" type="text"/>
                            <textarea value={body} onChange={(event) => this.onSetNewEmailField({
                                body: event.target.value
                            })}  placeholder="Email body..." name="" id="" cols="30" rows="10"></textarea>
                            <div onClick={() => this.sendEmail(sendTo, subject, body)}>Send</div>
                        </div>
                    )
                }
            </section>
        )
    }
}