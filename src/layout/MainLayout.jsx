import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>

            <Navbar></Navbar>

            <main className='pt-[63px] md:pt-[68px]'>
                <Outlet></Outlet>
            </main>


            

        </>
    );
};

export default MainLayout;