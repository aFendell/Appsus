const { Link } = ReactRouterDOM
import { emailService } from '../services/email-service.js'

export class EmailDetails extends React.Component {

    state = {
        email: null
    }

    componentDidMount() {
        const {loadEmails} = this.props
        emailService.setEmailRead(this.props.match.params.emailId, true)
        this.loadEmail()
        loadEmails()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.emailId !== this.props.match.params.emailId) {
            this.loadEmail()
        }
    }

    loadEmail() {
        const id = this.props.match.params.emailId
        emailService.getEmailById(id).then(email => {
            if (!email) return this.props.history.push('/')
            this.setState({ email })
        })
    }

    onDeleteEmail = () => {
        console.log('delete')
        emailService.deleteEmail(this.state.email.id)
            .then(() => {
                this.props.history.push('/mail')
            })
    }

    render() {
        const { email } = this.state

        if (!email) return <div>Loading...</div>
        return (
            <div className="container email-details" >

                <p>{email.sendTo}</p>
                <p>{email. subject}</p>
                <p>{email.body}</p>
                <p>{email.sentAt}</p>
                <button  class="btn-trash" onClick={this.onDeleteEmail}></button>
                
                <button className="btn-back" onClick={() => this.props.history.push('/mail/inbox')}><i class="fas fa-arrow-left"></i> Back to mail</button>
            </div >
        )


    }

}
