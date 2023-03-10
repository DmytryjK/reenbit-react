import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import apiService from '../../services/apiService';
import './heroPage.scss';

const HeroPage = ({ charId }) => {
    const [loadedChar, setLoadedChar] = useState({});

    const {getCharacter} = apiService();

    useEffect(() => {
        if (localStorage.getItem('loadCharById') && (typeof(JSON.parse(localStorage.getItem('loadCharById'))) === 'object')) {
            setLoadedChar(JSON.parse(localStorage.getItem('loadCharById')));
        }
    }, []);

    useEffect(() => {
        if (charId) {
            getCharacter(charId).then(setLoadedChar);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('loadCharById', JSON.stringify(loadedChar));
    }, [loadedChar]);

    const {id, name, status, specie, gender, img, origin, type} = loadedChar;

    return (
        <section className="hero">
            <Link to="/" className="hero__back-link">Go back</Link>
            <div className="container-hero">
                <img className="hero__avatar" src={img} alt="hero avatar" width="300" height="300"/>
                <h2 className="hero__title">{name}</h2>
                <p className="hero__subtitle">Informations</p>
                <ul className="hero__info-list info-list">
                    <li className="info-list__item">
                        <h3 className="info-list__title">Gender</h3>
                        <p className="info-list__descr">{gender}</p>
                    </li>
                    <li className="info-list__item">
                        <h3 className="info-list__title">Status</h3>
                        <p className="info-list__descr">{status}</p>
                    </li>
                    <li className="info-list__item">
                        <h3 className="info-list__title">Specie</h3>
                        <p className="info-list__descr">{specie}</p>
                    </li>
                    <li className="info-list__item">
                        <h3 className="info-list__title">Origin</h3>
                        <p className="info-list__descr">{origin}</p>
                    </li>
                    <li className="info-list__item">
                        <h3 className="info-list__title">Type</h3>
                        <p className="info-list__descr">{type}</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default HeroPage;
