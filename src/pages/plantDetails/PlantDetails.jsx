import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const PlantDetails = () => {

    const { idOfPlant } = useParams();
    const plants = useLoaderData()

    const expectedPlant = plants.find(plant => plant.plantId == idOfPlant);
    const {
        plantId,
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
        <div>

           <p>review : {description}</p>

        </div>
    );
};

export default PlantDetails;