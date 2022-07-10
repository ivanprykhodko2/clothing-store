import { Routes, Route, } from 'react-router-dom';

import Home from "./Routes/Home/Home";
import SearchBar from './Routes/SearchBar/SearchBar';
import SignIn from './Routes/Sign-In/SignIn';

const Shop = () => {
    return(<h1>Hello earth</h1>)
};

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={ <SearchBar/> }>
                    <Route index element={ <Home/> } />
                    <Route path='shop' element={ <Shop/> }/>
                    <Route path='sign-in' element={ <SignIn/> }/>
                </Route>
            </Routes>
        </div>
    )
};

export default App;
