import { Routes, Route, Outlet } from 'react-router-dom';

import Home from "./Routes/Home/Home";
import SearchBar from './Routes/SearchBar/SearchBar';
import Authentication from './Routes/Authentication/Authentication';
import Shop from './Shop/Shop';
import Checkout from './Routes/Checkout/Checkout';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={ <SearchBar/> }>
                    <Route index element={ <Home/> } />
                    <Route path='shop' element={ <Shop/> }/>
                    <Route path='auth' element={ <Authentication/> }/>
                    <Route path='checkout' element={ <Checkout/> }/>
                </Route>
            </Routes>
        </div>
    )
};

export default App;
