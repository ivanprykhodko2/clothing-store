import { Outlet, Link } from 'react-router-dom';

import { Fragment, useContext } from 'react';

import { ReactComponent as CrwnLogo} from '../../Assets/crown.svg';

import { UserContext } from '../../Context/User.context';
import { CartContext } from '../../Context/Cart.context';

import { signOutUser } from '../../Utils/Firebase/Firebase.utils';

import CardIcon from '../../components/CardIcon/CardIcon';
import CardDropDown from '../../components/Card-dropDown/CardDropDown';

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './SearchBar.style';

const SearchBar = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    
    return (
        <Fragment>
            <NavigationContainer>

                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>

                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    ) : (
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                    )

                    }
                    <CardIcon/>
                </NavLinks>
                {isCartOpen &&<CardDropDown/>}
            </NavigationContainer>

            <Outlet/>
        </Fragment>
    );
};

export default SearchBar;