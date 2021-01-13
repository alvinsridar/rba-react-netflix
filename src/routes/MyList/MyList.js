import React, { useContext } from 'react';
import UserContext from '../../context/UserContext.js';
import PosterList from '../../component/PosterList/PosterList.js';
import { MyListContext } from '../../context/MyListContext';

const MyList = () => {

    const user = useContext(UserContext);
    const { myList } = useContext(MyListContext);

    return user.isLoggedIn ? (myList.length ? (
        <div>
            <p>Hi {user.userName}! Your list has {myList.length} shows.</p>
            <PosterList title='Saved Shows' posters={myList} />
        </div>
    ) : (
            <div>
                <p>Hi {user.userName}! Your list is empty. Add shows from the Home page.</p>
            </div>
        )
    ) : (
            <div>
                <p>Log in to view your list.</p>
            </div>
        )
}

export default MyList;