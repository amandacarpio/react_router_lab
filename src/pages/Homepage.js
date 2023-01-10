import {Link} from 'react-router-dom'
import stocks from '../data'

const Homepage = (props) => {

    return(   
        <div className="stocks">
        <h1>This is the Homepage</h1>    
    {stocks.map((stock) => {
        const {name, symbol, lastPrice, change} = stock
        return(
            <Link to={`/stocks/${symbol}`}>
                <h2>{name} ({symbol}) {lastPrice} {change}</h2>
            </Link>
        )
    })}
    </div>

)}

export default Homepage