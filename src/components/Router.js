import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Profile from 'routes/Profile';
import Navigation from 'components/Navigation';

const AppRouter = ({ isLoggedIn }) => {
    return (
        <HashRouter>
            {isLoggedIn && <Navigation />}
            {/* isLoggedIn이 true여야만 <Navigation />이 존재할 수 있음을 의미. */}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route
                            exact
                            path="/profile"
                            element={<Profile />}
                        ></Route>
                    </>
                ) : (
                    <Route exact path="/" element={<Auth />}></Route>
                )}
            </Routes>
        </HashRouter>
    );
};

export default AppRouter;
