
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaRegStar } from 'react-icons/fa';

const PlantDetails = () => {
    const { idOfPlant } = useParams();
    const plants = useLoaderData();

    const expectedPlant = plants.find(
        plant => plant.plantId === Number(idOfPlant)
    );

    if (!expectedPlant) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <h2 className="text-xl font-semibold text-gray-700">
                    Plant not found!
                </h2>
            </div>
        );
    }

    const {
        plantName,
        scientificName,
        image,
        description,
        price,
        rating,
        category,
        tags,
        careLevel,
        lightRequirement,
        waterFrequency,
        stock
    } = expectedPlant;

    return (
        <section className="mb-10 w-[94%] mx-auto py-8 md:w-[90%] md:py-10 lg:w-[85%]">
            <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-2 md:gap-8 lg:gap-10">

                {/* Plant Image */}
                <div className="w-full overflow-hidden rounded-xl bg-[#F3F5F2]">
                    <img
                        src={image}
                        alt={plantName}
                        className="h-[350px] w-full object-cover object-center md:h-[420px] lg:h-[480px]"
                    />
                </div>

                {/* Plant Information */}
                <div className="flex flex-col">

                    <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        {plantName}
                    </h1>

                    <p className="mt-2 text-sm italic text-gray-500 md:text-base">
                        {scientificName}
                    </p>

                    <div className="mt-4 border-t border-gray-200" />

                    <p className="py-3 text-sm font-medium text-gray-700 md:text-base">
                        {category}
                    </p>

                    <div className="border-t border-gray-200" />

                    <p className="mt-4 text-sm leading-7 text-gray-500">
                        <span className="font-bold text-gray-800">
                            Description:{' '}
                        </span>
                        {description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="mr-1 text-sm font-bold text-gray-800">
                            Tags:
                        </span>

                        {tags?.map(tag => (
                            <span
                                key={tag}
                                className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-4 mb-4 border-t border-gray-200" />

                    {/* Plant Details */}
                    <div className="space-y-3 text-sm">

                        <div className="flex gap-3">
                            <span className="w-32 shrink-0 text-gray-500">
                                Care Level:
                            </span>
                            <span className="font-semibold text-gray-800">
                                {careLevel}
                            </span>
                        </div>

                        <div className="flex gap-3">
                            <span className="w-32 shrink-0 text-gray-500">
                                Light:
                            </span>
                            <span className="font-semibold text-gray-800">
                                {lightRequirement}
                            </span>
                        </div>

                        <div className="flex gap-3">
                            <span className="w-32 shrink-0 text-gray-500">
                                Water:
                            </span>
                            <span className="font-semibold text-gray-800">
                                {waterFrequency}
                            </span>
                        </div>

                        <div className="flex gap-3">
                            <span className="w-32 shrink-0 text-gray-500">
                                Available Stock:
                            </span>
                            <span className="font-semibold text-gray-800">
                                {stock} Plants
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="w-32 shrink-0 text-gray-500">
                                Rating:
                            </span>
                            <span className="font-semibold text-gray-800">
                                {rating}
                            </span>
                            <FaRegStar className="text-gray-700" />
                        </div>

                    </div>

                    <div className="mt-4 border-t border-gray-200" />

                    {/* Price and Buttons */}
                    <div className="mt-5">
                        <span className="text-2xl font-bold text-green-700">
                            ৳{price}
                        </span>

                        <div className="mt-5 flex flex-wrap items-center gap-3">
                            <button className="btn w-fit border-none bg-green-700 px-5 text-white hover:bg-green-800">
                                Mark as Planted
                            </button>

                            <button className="btn w-fit border border-green-700 bg-white px-5 text-green-700 hover:bg-green-50">
                                Add to Wishlist
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PlantDetails;
