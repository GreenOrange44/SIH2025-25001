
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='header-global'>
            <div className="container header-container">
                <div className="logo">
                    <h1>Seva<span>Suraksha</span></h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/report">Report Symptoms</Link></li>
                        <li><Link to="/awareness">Awareness</Link></li>
                        <li><Link to="/alerts">Alerts</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;