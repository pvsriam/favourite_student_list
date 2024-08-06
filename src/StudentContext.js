import React, { createContext, useState } from 'react';

const FavouriteListContext = createContext();

const FavouriteListProvider = ({ children }) => {
    const [favouriteStudentList, setFavouriteStudentList] = useState([]);
    return (
        <FavouriteListContext.Provider value={{ favouriteStudentList, setFavouriteStudentList }}>
            {children}
        </FavouriteListContext.Provider>
    );
};

export { FavouriteListContext, FavouriteListProvider };
