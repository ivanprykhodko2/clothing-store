import { Routes, Route, Outlet } from 'react-router-dom';

import Home from "./Routes/Home/Home";
import SearchBar from './Routes/SearchBar/SearchBar';
import Authentication from './Routes/Authentication/Authentication';

const Shop = () => {
    return(<h1>Hello earth</h1>)
};

const Shuis = () =>{
    return(
        <div>
            <h1>jbscjiq</h1>
            <Outlet/>
        </div>
    )
};

const Ss = () =>{
    return(
        <div>
            <div>
                Piter
            </div>
            <Outlet/>
        </div>
    )
}
const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={ <SearchBar/> }>
                    <Route index element={ <Home/> } />
                    <Route path='shop' element={ <Shop/> }/>
                    <Route path='auth' element={ <Authentication/> }/>
                </Route>


                <Route path='/suish' element={<Shuis/>}>
                    <Route path='ss' element={<Ss/>}>
                        <Route path='a' element={<div>Prykhodko</div>}/>
                    </Route>
                    <Route path='dd' element={<div>kk</div>}/>
                </Route>
            </Routes>
        </div>
    )
};

export default App;
