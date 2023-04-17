import {Link} from 'react-router-dom';
import './Nav.css';
function Navbar() {
    return(
        <nav className="navbar">
            <h1 className="logo">Parking</h1>
            <div className="menu-icon">
                
            </div>
            <ul className='nav-links'>
                <Link to="/" className='home'>
                    <li>Home</li>
                </Link>
                
                <Link to="/add-slot" className='add-slot'>
                    <li>Add Slot</li>
                </Link>
                
                <Link to="/show-slot" className='show-slot'>
                    <li>Show Slot</li>
                </Link>
                <Link to="/login" className='login'>
                    <li>Log In</li>
                </Link>

                <Link to="/register" className='register'>
                    <li>Sign Up</li>
                </Link>
                
                

            </ul>
        </nav>
    )
}
export default Navbar;