const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM
import { EmailApp } from './apps/Email/pages/EmailApp.jsx'
import { KeepApp } from './apps/Keep/pages/KeepApp.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { About } from './pages/About.jsx'


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
                    <Route component={EmailApp} path="/mail" />
                    <Route component={KeepApp} path="/keep" />
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


