import { Outlet } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';

import { Fragment } from 'react';

import { ReactComponent as CrwnLogo } from '../../Assets/crown.svg';

import CartIcon from '../../components/CartIcon/CartIcon';
import CardDropDown from '../../components/Card-dropDown/CardDropDown';

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './SearchBar.style';

const SearchBar = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen)

    const signOutUser = () => dispatch(signOutStart());

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
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CardDropDown />}
            </NavigationContainer>

            <Outlet />
        </Fragment>
    );
};

export default SearchBar;