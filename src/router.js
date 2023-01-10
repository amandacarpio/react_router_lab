import { 
    createBrowserRouter, // allows us to create the BROWSER paths // without this, none of our paths would work
    createRoutesFromElements, // allows us to give routes elements which read the components we give to it
    Route // most important 
} from "react-router-dom";

import App from './App'
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import StocksDashboard from "./pages/StocksDashboard";
import SingleStock from "./pages/SingleStock";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='' element={<Homepage/>}/> 
            <Route path='/stocks' element={<StocksDashboard/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='stocks/:symbol' element={<SingleStock/>}/>
        </Route>
    )
)

export default router