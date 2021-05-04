const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM
import { AppHeader } from './cmps/AppHeader.jsx'
import { About } from './pages/About.jsx'
// import { BookDetails } from './pages/BookDetails.jsx'
// import { BooksApp } from './pages/BooksApp.jsx'
import { MisterEmail } from './pages/MisterEmail.jsx'
import { MissKeep } from './pages/MissKeep.jsx'
import { Home } from './pages/Home.jsx'



export function App() {
    return (
        <Router>
            <header>
                <AppHeader/>
            </header>
            <main>
                <Switch>
                    {/* <Route component={BookDetails} path="/book/:bookId" /> */}
                    {/* <Route component={BooksApp} path="/book" /> */}
                    <Route component={MisterEmail} path="/mail" />
                    <Route component={MissKeep} path="/keep" />
                    <Route component={About} path="/about" />
                    <Route component={Home} path="/"/>
                </Switch>
            </main>
            <footer>
               Dana and aFendell &copy;
            </footer>
        </Router>
    )
}


