import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import './navbar.scss';

const Navbar = () => {
    const {user, logOut} = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <nav className="navbar">
            <div className="container">
                {user?.displayName ? <LoginText user={user} handleSignOut={handleSignOut}/> : <Link className="navbar__link" to="signIn">Sign in</Link>}
            </div>
        </nav>
    )
}

const LoginText = ({user, handleSignOut}) => {
    return (
        <>
            <p>Hello, <b>{user.displayName}</b></p>
            <button 
                className="navbar__link" 
                onClick={handleSignOut}>Log Out</button>
        </>
        
    )
}

export default Navbar;
