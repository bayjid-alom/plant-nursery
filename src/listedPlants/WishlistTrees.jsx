import React, { useContext } from 'react';
import { PlantContext } from '../context/PlantProvider';
import { Link } from 'react-router';
import { MapPin, Droplets, Sun, Leaf, Star } from 'lucide-react';

const WishlistTrees = () => {

    const { wishlist } = useContext(PlantContext);

    return (
        <div className="mb-10 mx-auto py-8 ">



            {/* Empty Wishlist Message */}
            {
                wishlist.length === 0 && (
                    <div className="flex flex-col items-center justify-center text-center bg-[#F8FAFC] border border-gray-200 rounded-2xl py-16 md:py-20 px-5">

                        <Leaf size={42} className="text-green-600 mb-4" />

                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 font-serif">
                            Your Wishlist is Empty!
                        </h2>

                        <p className="text-sm text-gray-500 max-w-md mt-3 leading-6">
                            You haven't added any plants to your wishlist yet.
                            Explore our collection and save your favorite plants
                            to keep track of the ones you love.
                        </p>

                        <Link
                            to="/"
                            className="mt-6 px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-colors"
                        >
                            Explore Plants
                        </Link>

                    </div>
                )
            }







            {/* Planted Plants Cards */}
            <div className="space-y-4">

                {
                    wishlist.map(plant => (

                        <div
                            key={plant.plantId}
                            className="flex flex-col sm:flex-row gap-4 md:gap-5 border border-gray-200 rounded-xl p-3 md:p-3.5 hover:shadow-sm transition-shadow"
                        >

                            {/* Plant Image */}
                            <div className="w-full aspect-square sm:w-36 sm:h-36 lg:w-44 lg:h-44 shrink-0 flex items-center justify-center bg-[#F3F3F3] rounded-xl p-3 md:p-4">

                                <img
                                    src={plant.image}
                                    alt={plant.plantName}
                                    className="w-full h-full object-cover rounded-lg"
                                />

                            </div>

                            {/* Plant Information */}
                            <div className="flex-1 min-w-0 flex flex-col">

                                {/* Name and Scientific Name */}
                                <div>
                                    <h2 className="text-lg md:text-xl font-bold font-serif text-gray-900">
                                        {plant.plantName}
                                    </h2>

                                    <p className="text-sm text-gray-600 mt-1 italic">
                                        {plant.scientificName}
                                    </p>
                                </div>

                                {/* Tags and Category */}
                                <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-3">

                                    <span className="text-sm font-bold text-gray-900">
                                        Tags
                                    </span>

                                    {
                                        plant.tags?.map(tag => (
                                            <span
                                                key={tag}
                                                className="bg-green-50 text-green-600 text-xs font-medium px-3 py-1 rounded-full"
                                            >
                                                #{tag}
                                            </span>
                                        ))
                                    }

                                    <div className="flex items-center gap-2 text-xs text-gray-600">
                                        <Leaf size={15} />
                                        <span>{plant.category}</span>
                                    </div>

                                </div>

                                {/* Plant Care Information */}
                                <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-gray-500">

                                    <div className="flex items-center gap-1.5">
                                        <Sun size={15} />
                                        <span>{plant.lightRequirement}</span>
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <Droplets size={15} />
                                        <span>Water: {plant.waterFrequency}</span>
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <Leaf size={15} />
                                        <span>Care: {plant.careLevel}</span>
                                    </div>

                                </div>

                                <div className="border-t border-gray-200 mt-3 mb-2.5" />

                                {/* Category, Rating and Price */}
                                <div className="flex flex-wrap items-center gap-2">

                                    <span className="bg-blue-50 text-blue-500 text-xs px-3 py-1.5 rounded-full">
                                        Category: {plant.category}
                                    </span>

                                    <span className="flex items-center gap-1 bg-orange-50 text-orange-500 text-xs px-3 py-1.5 rounded-full">
                                        <Star size={13} fill="currentColor" />
                                        {plant.rating}
                                    </span>

                                    <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                                        ৳{plant.price}
                                    </span>

                                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full">
                                        Stock: {plant.stock}
                                    </span>

                                    <Link
                                        to={`/plant-details/${plant.plantId}`}
                                        className="bg-green-50 hover:bg-green-100 text-green-700 text-xs font-semibold px-4 py-1.5 rounded-full transition-colors border border-green-100"
                                    >
                                        View Details
                                    </Link>

                                </div>



                            </div>

                        </div>

                    ))
                }

            </div>

        </div>
    );
};

export default WishlistTrees;