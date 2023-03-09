import Header from '../header/Header';
import SearchForm from '../searchForm/SearchForm';
import HeroesList from '../heroes-list/HeroesList';

const MainPage = () => {
    return (
        <>
            <Header/>
            <SearchForm/>
            <HeroesList/>
        </>
    )
}

export default MainPage;