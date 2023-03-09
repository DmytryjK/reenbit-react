import imgcard from '../../resources/imgcard.png';
import './heroesList.scss';

const HeroesList = () => {
    return (
        <section className="heroes">
            <div className="container">
                <ul className="heroes__list list">
                    <li className="list__item">
                        <div className="list__img">
                            <img width="240" height="188" src={imgcard} alt="" />
                        </div>
                        <div className="list__text">
                            <h2 className="list__title">Rick Sanchez</h2>
                            <p className="list__subtitle">Human</p>
                        </div>
                    </li>
                    <li className="list__item">
                        <div className="list__img">
                            <img width="240" height="188" src={imgcard} alt="" />
                        </div>
                        <div className="list__text">
                            <h2 className="list__title">Rick Sanchez</h2>
                            <p className="list__subtitle">Human</p>
                        </div>
                    </li>
                    <li className="list__item">
                        <div className="list__img">
                            <img width="240" height="188" src={imgcard} alt="" />
                        </div>
                        <div className="list__text">
                            <h2 className="list__title">Rick Sanchez</h2>
                            <p className="list__subtitle">Human</p>
                        </div>
                    </li>
                    <li className="list__item">
                        <div className="list__img">
                            <img width="240" height="188" src={imgcard} alt="" />
                        </div>
                        <div className="list__text">
                            <h2 className="list__title">Rick Sanchez</h2>
                            <p className="list__subtitle">Human</p>
                        </div>
                    </li>
                    <li className="list__item">
                        <div className="list__img">
                            <img width="240" height="188" src={imgcard} alt="" />
                        </div>
                        <div className="list__text">
                            <h2 className="list__title">Rick Sanchez</h2>
                            <p className="list__subtitle">Human</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default HeroesList;