import { useEffect, useState, useCallback } from 'react';
import apiService from '../../services/apiService';

import Spinner from '../spinner/Spinner';
import './heroesList.scss';

const HeroesList = (props) => {
    const [loadedChars, setloadedChars] = useState([]);
    const [filteredChars, setFilteredChars] = useState([]);
    const [isFilterActive, setIsFilterActive] = useState(false);

    const [isLoading, setIsLoading] = useState(true);
    const {getCharacters} = apiService();

    const {input} = props;

    useEffect(() => {
        getCharacters()
            .then(data => {
                setloadedChars(data);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        if (localStorage.getItem('filterData')) {
            const localChars = JSON.parse(localStorage.getItem('filterData'));
            filterChars(localChars);
            setFilteredChars(localChars);
        }
    }, [])

    // useEffect(() => {
    //     if (filteredChars.length > 0) {
    //         filterChars(filteredChars);
    //     }
        
    // }, [filteredChars])

    useEffect(() => {
        
        const copyChars = JSON.parse(JSON.stringify(loadedChars));
        console.log(copyChars);
        setFilteredChars(() => filterChars(copyChars));

        if (filteredChars.length > 0) {
            saveToLocalStorage(filteredChars);
        }
        
    }, [input]);

    const filterChars = (data) => {
        console.log(data)
        if (!input) {
            setIsFilterActive(false);
            return [];
        } else {
            setIsFilterActive(true);
            return data.filter(item => item.name.toUpperCase().indexOf(input.toUpperCase()) >= 0);
        }
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

    if (isLoading) {
        renderedCharList = <Spinner/>
    } else if (!isLoading && !isFilterActive) {
        renderedCharList = charList(loadedChars);
    } else if (!isLoading && isFilterActive) {
        renderedCharList = charList(filteredChars);
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
