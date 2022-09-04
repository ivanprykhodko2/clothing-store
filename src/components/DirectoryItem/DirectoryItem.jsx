import { useNavigate } from 'react-router-dom';

import { DirectoryItemConainer, BackgroundImage, Body, DirectoryTitle } from './DirectoryItem.style'

const DirectoryItem = ({ title, imageUrl, route }) => {
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    return (
        <DirectoryItemConainer onClick={onNavigateHandler}>

            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>

        </DirectoryItemConainer>
    );
};

export default DirectoryItem;