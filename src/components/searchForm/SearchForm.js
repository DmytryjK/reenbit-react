import { useEffect } from 'react';

import searchIcon from '../../resources/searchIcon.svg';
import './searchForm.scss';

const SearchForm = (props) => {
    const {input, setInput} = props;
    const renderedInput = document.getElementsByClassName('search__input');

    useEffect(() => {
        if (localStorage.getItem('inputValue')) {
            setInput(localStorage.getItem('inputValue'));
        }
    }, [])

    const changeInputValue = (event) => {
        const inputValue = event.target.value;

        setInput(inputValue);
        localStorage.setItem('inputValue', `${inputValue}`);
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