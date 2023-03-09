import { useState } from 'react';

import Header from '../header/Header';
import SearchForm from '../searchForm/SearchForm';
import HeroesList from '../heroes-list/HeroesList';

const MainPage = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <Header/>
            <SearchForm input={inputValue} setInput={setInputValue}/>
            <HeroesList input={inputValue}/>
        </>
    )
}

export default MainPage;