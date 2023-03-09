import searchIcon from '../../resources/searchIcon.svg';
import './searchForm.scss';

const SearchForm = () => {
    return (
        <section className="search">
            <div className="container">
                <button className="search__btn">
                    <img width="18" height="18" className="search__icon" src={searchIcon} alt="search icon" />
                </button>
                <input className="search__input" type="text" placeholder="Filter by name..."/>
            </div>
        </section>
    )
}

export default SearchForm;