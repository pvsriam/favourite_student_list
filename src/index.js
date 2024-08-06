import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FavouriteListProvider } from './StudentContext';
import Studentlist from './Studentlist';
import Favouritestudentlist from './Favouritestudent';
import NavBar from './navbar'

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
    return (
        <FavouriteListProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Studentlist />} />
                    <Route path="/favourites" element={<Favouritestudentlist />} />
                </Routes>
            </Router>
        </FavouriteListProvider>
    );
}

root.render(<App />);
