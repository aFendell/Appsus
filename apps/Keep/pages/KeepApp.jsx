import { keepService } from '../services/keep-service.js'
import { NoteList } from '../cmps/NoteList.jsx'
import { NoteDetails } from './NoteDetails.jsx';
const { Route, Switch } = ReactRouterDOM

export class KeepApp extends React.Component {
    state = {
        notes: null,
        filterBy: null
    }
    componentDidMount() {
        console.log('componentDidMount');
        this.loadNotes()

    }

    loadNotes = () => {
        console.log('enter loadkeeps');
        // keepService.query(this.state.filterBy).then((keeps) => {
        keepService.query().then((notes) => {
            console.log(notes);
            this.setState({ notes })
        })
    }

    // onSetFilter = (filterBy) => {

    //     this.setState({ filterBy }, this.loadKeeps)
    // }

    render() {
        // this.loadKeeps()
        // console.log('rendering keeps');
        const { notes } = this.state
        if (!notes) return <div>Loading...</div>
        return <section className="keep-app">
            <h1>KeepApp</h1>
            <Switch>
                <Route component={NoteDetails} path="/keep/:noteId" />
                <Route path="/keep" render={() => (
                    <NoteList notes={notes} />
                )} />
            </Switch>
        </section>
    }
}