import './search.css';

export default function Search({ city, isLoading, onChangeSearch, onSearch }) {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch()
        }
    }
    const buttonText = isLoading ? 'Loading...' : 'Search'

    return (
        <div className="Search">
            <input
                className="Search__input"
                type="text"
                placeholder="Location"
                name="search"
                value={city}
                onChange={(event) => onChangeSearch(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className="Search__button" disabled={isLoading} onClick={() => onSearch()}>{buttonText}</button>
        </div>
    );
}
