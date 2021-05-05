const { NavLink } = ReactRouterDOM

export function AppHeader(props) {
    return (
        <nav className="app-header">
            <h1>Appsus</h1>
            <ul className="clean-list">
                {/* <i className="fa fa-trash"></i>
                <i className="fa fa-youtube"></i> */}
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/mail">Mail</NavLink></li>
                <li><NavLink exact to="/keep">Keep</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}