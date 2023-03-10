import { useEffect, useState, useCallback } from 'react';
import apiService from '../../services/apiService';

import Spinner from '../spinner/Spinner';
import './heroesList.scss';

const HeroesList = ({input}) => {
    const [loadedChars, setloadedChars] = useState([]);
    const [filteredChars, setFilteredChars] = useState([]);

    const [isLocalStor, setIsLocalStore] = useState(false);
    const [isFilterActive, setIsFilterActive] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const {getCharacters} = apiService();

    useEffect(() => {
        getCharacters()
            .then(data => {
                setloadedChars(data);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        const copyChars = JSON.parse(JSON.stringify(loadedChars));
        const filtersResult = filterChars(copyChars);
        setFilteredChars(() => filtersResult);

        // if (input) {
        //     saveToLocalStorage(filtersResult);
        // }
        console.log(input)
        saveToLocalStorage(filtersResult);
        
    }, [input]);

    useEffect(() => {

        if (localStorage.getItem('filterData') !== 'undefined' && localStorage.getItem('filterData')) {
            const localChars = JSON.parse(localStorage.getItem('filterData'));
            setIsLocalStore(true);
            setFilteredChars(() => localChars);
        }

    }, []);

    const filterChars = (data) => {
        setIsFilterActive(true);
        return data.filter(item => item.name.toUpperCase().indexOf(input.toUpperCase()) >= 0);
    }

    const saveToLocalStorage = (filterData) => {
        localStorage.setItem('filterData', `${JSON.stringify(filterData)}`);
    }

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

    let renderedCharList;

    renderedCharList = charList(loadedChars);

    if (isLoading) {
        renderedCharList = <Spinner/>;
    } else if (!isLoading && input) {
        console.log('tyt')
        renderedCharList = charList(filteredChars);
    } else if (!isLoading && !input) {
        renderedCharList = charList(loadedChars);
    } 

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
