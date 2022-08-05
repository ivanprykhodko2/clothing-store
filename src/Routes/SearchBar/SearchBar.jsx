import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CrwnLogo} from '../../Assets/crown.svg';
import { UserContext } from '../../Context/User.context';
import { CartContext } from '../../Context/Cart.context';
import { signOutUser } from '../../Utils/Firebase/Firebase.utils';
import CardIcon from '../../components/CardIcon/CardIcon';
import CardDropDown from '../../components/Card-dropDown/CardDropDown';
import './SearchBar.style.scss';

const SearchBar = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    
    return (
        <Fragment>
            <div className='navigation'>

                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                    ) : (
                        <Link className='nav-link' to='/auth'>
                            SIGN IN
                        </Link>
                    )

                    }
                    <CardIcon/>
                </div>
                {isCartOpen &&<CardDropDown/>}
            </div>

            <Outlet/>
        </Fragment>
    );
};

export default SearchBar;