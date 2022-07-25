import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CrwnLogo} from '../../Assets/crown.svg';
import { UserContext } from '../../Context/User.context';
import { signOutUser } from '../../Utils/Firebase/Firebase.utils';
import './SearchBar.style.scss';

const SearchBar = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }
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
                        <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>
                    ) : (
                        <Link className='nav-link' to='/auth'>
                            SIGN IN
                        </Link>
                    )

                    }
                </div>

            </div>

            <Outlet/>
        </Fragment>
    );
};

export default SearchBar;