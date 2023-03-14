import {useNavigate, Link} from 'react-router-dom';
import './404.scss';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="errorPage">
            <h2>Sorry, something went wrong.</h2>
            <h3>You can <button onClick={() => navigate(-1)}>go back</button> and try again or go to the <Link to="/">Main page</Link></h3>
        </div>
    )
}

export default ErrorPage;
