import { useEffect, useState } from 'react';
import apiService from '../../services/apiService';

import Spinner from '../spinner/Spinner';
import './heroesList.scss';

const HeroesList = () => {
    const [loadedChars, setloadedChars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const {getCharacters} = apiService();

    useEffect(() => {
        getCharacters()
            .then(data => {
                setloadedChars(data);
                setIsLoading(false);
            });
    }, []);

    const charList = (data) => {
        const renderedItems = data.map(char => {
            const {id, name, specie, img} = char;
            return (
                <li key={id} className="list__item">
                    <div className="list__img">
                        <img width="240" height="188" src={img} alt={name} />
                    </div>
                    <div className="list__text">
                        <h2 className="list__title">{name}</h2>
                        <p className="list__subtitle">{specie}</p>
                    </div>
                </li>
            )
        })
        return renderedItems;
    }

    const renderedCharList = isLoading ? <Spinner/> : charList(loadedChars);

    return (
        <section className="heroes">
            <div className="container">
                <ul className="heroes__list list">
                    {renderedCharList}
                </ul>
            </div>
        </section>
    )
}

export default HeroesList;
