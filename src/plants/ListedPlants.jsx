import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PlantedTrees from '../listedPlants/PlantedTrees';
import WishlistTrees from '../listedPlants/WishlistTrees';

const ListedPlants = () => {


    return (
        <div className="w-[94%] md:w-[90%] lg:w-[85%] mx-auto mb-15 md:mb-20 mt-8">



            {/* Dropdown */}
            <div className="flex justify-end mb-4">
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn m-0 whitespace-nowrap min-h-0 h-9 w-40 border border-gray-200 rounded-lg bg-white text-gray-700 text-sm font-medium shadow-none hover:bg-gray-50 hover:border-gray-300"
                    >
                        Sort by : Default
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="dropdown-content menu mt-1 w-40 rounded-lg bg-white border border-gray-100 p-2 shadow-md text-left text-sm text-gray-600 z-10"
                    >
                        <li><a className=" whitespace-nowrap hover:bg-gray-100">Rating</a></li>
                        <li><a className=" whitespace-nowrap hover:bg-gray-100">Price</a></li>
                        <li><a className=" whitespace-nowrap hover:bg-gray-100">Plant Name</a></li>
                    </ul>
                </div>
            </div>







            {/* Tabs */}
            <Tabs>
                <TabList>
                    <Tab>Planted Trees</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <PlantedTrees />
                </TabPanel>

                <TabPanel>
                    <WishlistTrees />
                </TabPanel>
            </Tabs>



        </div>
    );
};

export default ListedPlants;