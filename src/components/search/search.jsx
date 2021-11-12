import { useSelector, useDispatch } from 'react-redux'
import { getCity, changeCity } from '../../store/features/citySlice';
import './search.css';

export default function Search({ isLoading, onSearch }) {
    const city = useSelector(getCity)
    const dispatch = useDispatch();

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
                onChange={(event) => dispatch(changeCity(event.target.value))}
                onKeyDown={handleKeyDown}
            />
            <button className="Search__button" disabled={isLoading} onClick={() => onSearch()}>{buttonText}</button>
        </div>
    );
}
