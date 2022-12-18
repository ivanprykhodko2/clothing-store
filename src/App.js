import { Routes, Route } from 'react-router-dom';

import { useEffect } from "react";

import { useDispatch } from 'react-redux';

import Home from "./Routes/Home/Home";
import SearchBar from './Routes/SearchBar/SearchBar';
import Authentication from './Routes/Authentication/Authentication';
import Shop from './Shop/Shop';
import Checkout from './Routes/Checkout/Checkout';
import { checkUserSession, setCurrentUser } from './store/user/user.action';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession())
    }, [])

    return (
        <div>
            <Routes>
                <Route path='/' element={<SearchBar />}>
                    <Route index element={<Home />} />
                    <Route path='shop/*' element={<Shop />} />
                    <Route path='auth' element={<Authentication />} />
                    <Route path='checkout' element={<Checkout />} />
                </Route>
            </Routes>
        </div>
    )
};

export default App;
