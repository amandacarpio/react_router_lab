import stocks from "../data"
import { useParams } from "react-router-dom"

const SingleStock = (props) => {
   
    const {symbol: stockClicked} = useParams()

    const stockSelected = stocks.find((stock) => stock.symbol === stockClicked)
    console.log(stockSelected)
    const {name, symbol, lastPrice, change, high, low, open} = stockSelected
    return(
        <div className="SingleStock">
                        <h1>{name} ({symbol})</h1>
                        <h1>Last Price: ${lastPrice}</h1>
                        <h1>Change: {change}</h1>
                        <h1>High: ${high}</h1>
                        <h1>Low: ${low}</h1>
                        <h1>Open Price: ${open}</h1>    
        </div>
)}

export default SingleStock