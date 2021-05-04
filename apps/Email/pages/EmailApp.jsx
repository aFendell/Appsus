
const { Link } = ReactRouterDOM
import { emailService } from '../services/email-service.js'
import { eventBusService } from '../services/event-bus-service.js'
import { EmailList } from '../cmps/EmailList.jsx'

import { EmailFilter } from '../cmps/EmailFilter.jsx'

export class EmailApp extends React.Component {
    state = {
        emails: null,
        filterBy: {
            title: ''
        },
    }
    componentDidMount() {
       // console.log('EmailUp')
        this.loadEmails()
    }

    loadEmails() {
        console.log('load')
        emailService.query(this.state.filterBy)// undefind
            .then((emails) => {
                 console.log('emails',emails);
                this.setState({ emails })
                //eventBusService.emit('email-count', email.length)
            })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy: { ...this.state.filterBy, ...filterBy } }, this.loadBooks)
    }

    render() {
        const { emails, filterBy } = this.state

        if (!emails) return <div>Loading...</div>
        return (
    
            <section className="container email-app">
                
                {/* <EmailFilter onSetFilter={this.onSetFilter} /> */}
                <EmailList emails={emails} />

                {/* <Link className="btn" to="/email/edit">Add email</Link> */}
            </section>
        )
    }
}