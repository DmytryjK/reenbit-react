import avatar from '../../resources/avatar.png';
import './heroPage.scss';

const HeroPage = () => {
    return (
        <section className="hero">
            <a className="hero__back-link" href="/">Go back</a>
            <div className="container-hero">
                <img className="hero__avatar" src={avatar} alt="hero avatar" width="300" height="300"/>
                <h2 className="hero__title">Rick Sanchez</h2>
                <p className="hero__subtitle">Informations</p>
                <ul className="hero__info-list info-list">
                    <li className="info-list__item">
                        <h3 className="info-list__title">Gender</h3>
                        <p className="info-list__descr">Male</p>
                    </li>
                    <li className="info-list__item">
                        <h3 className="info-list__title">Gender</h3>
                        <p className="info-list__descr">Male</p>
                    </li>
                    <li className="info-list__item">
                        <h3 className="info-list__title">Gender</h3>
                        <p className="info-list__descr">Male</p>
                    </li>
                    <li className="info-list__item">
                        <h3 className="info-list__title">Gender</h3>
                        <p className="info-list__descr">Male</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default HeroPage;
