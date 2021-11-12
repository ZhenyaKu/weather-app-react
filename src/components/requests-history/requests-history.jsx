import "./requests-history.css";


export default function RequestsHistory({ requestsHistory, historyLimit, onChangeCity }) {

    return (
        <div className="RequestsHistory">
            <h2 className="RequestsHistory__title">Last {historyLimit} queries</h2>

            <div className="RequestsHistory__queries">
                {requestsHistory.map((savedCity, index) => (
                    <span
                        className="RequestsHistory__queries item"
                        key={index}
                        onClick={() => onChangeCity(savedCity)}
                    >
                        {savedCity}
                    </span>
                ))}
            </div>
        </div>
    );
}
