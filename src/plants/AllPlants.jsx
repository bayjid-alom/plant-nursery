import React, { use } from 'react';
import { FaRegStar } from 'react-icons/fa';
import PlantCard from '../ui/PlantCard';

const plantsPromise = fetch("/plants-data.json").then(res => res.json());

const AllPlants = () => {
    const plants = use(plantsPromise);

    return (
        <section className="all-plants w-[94%] md:w-[92%] lg:w-[90%] mx-auto mb-15 md:mb-24 lg:mb-30">

            {/* Section Heading */}
            <div className="heading mb-10 text-center">

                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    All Plants
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
                    Discover beautiful plants to bring freshness, natural beauty, and a touch of green to your space.
                </p>
            </div>

            {/* Plant Cards Container */}
            <div className="plant-container grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                {
                    plants.map(plant => <PlantCard
                        key={plant.plantId}
                        plant={plant}>

                    </PlantCard>)
                }

            </div>
        </section>
    );
};

export default AllPlants;