import * as React from 'react';
import { Link } from 'react-router-dom';

export default function menu() {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">Look, Cover, Check</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link to="/" className="nav-link"><i className="fas fa-question" /> Test</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Configure"><i className="fas fa-cog" /> Configure</Link>
            </li>
        </ul>
        </div>
        </nav>);
}