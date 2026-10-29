import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>

            <Navbar></Navbar>

            <main className='pt-20'>
                <Outlet></Outlet>
            </main>

        </>
    );
};

export default MainLayout;