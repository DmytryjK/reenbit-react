import { useState } from 'react';

import Header from '../header/Header';
import SearchForm from '../searchForm/SearchForm';
import HeroesList from '../heroes-list/HeroesList';

const MainPage = () => {
    const [inputValue, setInputValue] = useState('');

    const changeInputValue = (inputValue) => {
        setInputValue(inputValue);
    }

    return (
        <>
            <Header/>
            <SearchForm onChange={changeInputValue} setInputValue={setInputValue}/>
            <HeroesList input={inputValue}/>
        </>
    )
}

export default MainPage;
