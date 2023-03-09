import image from './spinner.svg';
import './spinner.scss';

const Spinner = () => {
    return (
        <div className="spinner">
            <img src={image} alt="" />
        </div>
    )
}

export default Spinner;