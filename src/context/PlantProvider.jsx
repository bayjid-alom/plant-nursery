import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const PlantContext = createContext()

const PlantProvider = ({ children }) => {
    const [planted, setPlanted] = useState([]);
    const [wishlist, setWishlist] = useState([]);




    const handleMarkAsPlanted = (currentPlant) => {

        const isExistPlant = planted.find(plant => plant.plantId == currentPlant.plantId);
        if (isExistPlant) {
            toast.info("You've already added this plant to your planted list.");
            return;
        }
        else {
            setPlanted([...planted, currentPlant])
            toast.success(`${currentPlant.plantName} added to your planted list!`);
        }
    }





    const handleAddToWishlist = (currentPlant) => {

        const isExistInPlanted = planted.find(
            plant => plant.plantId === currentPlant.plantId
        );

        if (isExistInPlanted) {
            toast.warning("This plant is already in your planted list.");
            return;
        }

        const isExistPlant = wishlist.find(
            plant => plant.plantId === currentPlant.plantId
        );

        if (isExistPlant) {
            toast.info("This plant is already in your wishlist.");
            return;
        }
        else {
            setWishlist([...wishlist, currentPlant]);
            toast.success(`${currentPlant.plantName} added to your wishlist!`);
        }
    };




    const data = {
        handleMarkAsPlanted,
        planted,
        setPlanted,
        handleAddToWishlist,
        wishlist,
        setWishlist
    }

    return (
        <PlantContext.Provider value={data}>
            {children}
        </PlantContext.Provider>

    );
};

export default PlantProvider;