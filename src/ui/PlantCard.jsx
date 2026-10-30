import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const PlantCard = ({ plant }) => {
    return (
        <Link
            to={`/plant-details/${plant.plantId}`}
            className="plant-card group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >

            {/* Full Width Plant Image */}
            <div className="h-44 w-full overflow-hidden bg-[#F3F5F2]">
                <img
                    src={plant.image}
                    alt={plant.plantName}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Plant Information */}
            <div className="p-4">

                {/* Category and Tags */}
                <div className="flex flex-wrap gap-1.5">
                    <span className="rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700">
                        {plant.category}
                    </span>

                    {plant.tags?.slice(0, 1).map(tag => (
                        <span
                            key={tag}
                            className="rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Plant Name */}
                <div className="mt-3">
                    <h3 className="truncate text-lg font-bold text-gray-900 transition-colors group-hover:text-green-700">
                        {plant.plantName}
                    </h3>

                    <p className="mt-1 truncate text-xs italic text-gray-500">
                        {plant.scientificName}
                    </p>
                </div>

                {/* Dashed Divider */}
                <div className="my-4 border-t border-dashed border-gray-300" />

                {/* Card Footer */}
                <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-green-700">
                        ৳{plant.price}
                    </span>

                    <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-gray-700">
                            {plant.rating}
                        </span>

                        <FaRegStar className="text-sm text-gray-700" />
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default PlantCard;