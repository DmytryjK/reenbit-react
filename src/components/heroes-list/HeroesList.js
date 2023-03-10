import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../../services/apiService';

import Spinner from '../spinner/Spinner';
import './heroesList.scss';

const HeroesList = ({input}) => {
    const [loadedChars, setloadedChars] = useState([]);
    const [filteredChars, setFilteredChars] = useState([]);
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

        if (localStorage.getItem('filterData') !== 'undefined' && localStorage.getItem('filterData')) {
            const localChars = JSON.parse(localStorage.getItem('filterData'));
            setFilteredChars(() => localChars);
        }

    }, []);
    
    useEffect(() => {
        const copyChars = [...loadedChars];
        const filtersResult = filterChars(copyChars);
        setFilteredChars(() => filtersResult);
        saveToLocalStorage(filtersResult);
    }, [input, loadedChars]);

    const filterChars = (data) => {
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
                    <Link to="/hero">
                        <div className="list__img">
                            <img width="240" height="188" src={img} alt={name} />
                        </div>
                        <div className="list__text">
                            <h2 className="list__title">{name}</h2>
                            <p className="list__subtitle">{specie}</p>
                        </div>
                    </Link>
                </li>
            )
        })
        return renderedItems;
    }

    let renderedCharList;
    if (isLoading) {
        renderedCharList = <Spinner/>;
    } else if (!isLoading && input) {
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
