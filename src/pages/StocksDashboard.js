import {Link} from 'react-router-dom'
import stocks from '../data'

const StocksDashboard = () => {
    return(
    <div className="stocks">
        {stocks.map((stock) => {
            const {name, symbol, lastPrice, change, high, low, open} = stock
            return(
                <Link to={`/stocks/${symbol}`}>
                    <h2>{name} ({symbol}) {lastPrice} {change}</h2>
                </Link>
            )
        })}

    </div>
)}

export default StocksDashboard