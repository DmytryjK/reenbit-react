import { useEffect, useState } from 'react';

import searchIcon from '../../resources/searchIcon.svg';
import './searchForm.scss';

const SearchForm = ({ onChange, setInputValue }) => {
    const renderedInput = document.getElementsByClassName('search__input');

    const [input, setInput] = useState('');

    useEffect(() => {
        if (localStorage.getItem('inputValue')) {
            setInput(localStorage.getItem('inputValue'));
            setInputValue(() => localStorage.getItem('inputValue'));
        }
    }, []);

    const changeInputValue = (event) => {
        const inputValue = event.target.value;
        onChange(inputValue);
        localStorage.setItem('inputValue', `${inputValue}`);
        setInput(inputValue);
    }


    return (
        <section className="search">
            <div className="container">
                <button 
                    className="search__btn">
                    <img width="18" height="18" className="search__icon" src={searchIcon} alt="search icon" />
                </button>
                <input 
                    onChange={changeInputValue}
                    className="search__input" 
                    type="text" 
                    placeholder="Filter by name..."
                    value={input}/>
            </div>
        </section>
    )
}

export default SearchForm;