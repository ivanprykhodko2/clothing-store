import { Routes, Route, Outlet } from 'react-router-dom';

import Home from "./Routes/Home/Home";

const SearchBar = () => {
    return (
        <div>
            <div>
                <h1>Hi, I'm a NavigationBar</h1>
            </div>

            <Outlet/>
        </div>
    )
};

const Suish = () => {
    return(<h1>Hello earth</h1>)
};

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<SearchBar/>}>
                    <Route index element={ <Home/> } />
                    <Route path='main' element={ <Suish/> }/>
                </Route>
            </Routes>
        </div>
    )
};

export default App;
