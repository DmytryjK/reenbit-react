import { useNavigate } from 'react-router-dom';
import {GoogleButton} from 'react-google-button';
import './signInPage.scss';
import { UserAuth } from '../../../context/AuthContext';

const SignInPage = () => {
    const navigate = useNavigate();
    const {googleSignIn} = UserAuth();
 
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            navigate('/');
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="signIn">
                <div className="container">
                    <button className="signIn__btn" onClick={() => navigate(-1)}>Go back</button>
                    <div className="signIn__content">
                        <h2>Sign In</h2>
                        <GoogleButton onClick={handleGoogleSignIn}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignInPage;
