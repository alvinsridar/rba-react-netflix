import React, { createContext, useState } from 'react';

export const MyListContext = createContext();

const MyListContextProvider = (props) => {
    const [myList, setMyList] = useState([]);

    const addShowToList = (newShow) => {
        setMyList([...myList, newShow]);
        alert(`${newShow.name} has been added to your list.`);
    };

    return (
        <MyListContext.Provider value={{ myList, addShowToList }}>
            {props.children}
        </MyListContext.Provider>
    );
}

//states

//return this.props.children

export default MyListContextProvider;