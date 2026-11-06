import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import ListedPlants from "../plants/ListedPlants";
import ErrorMessage from "../pages/errorMessage/ErrorMessage";
import PlantDetails from "../pages/plantDetails/PlantDetails";
import PlantCare from "../pages/plantCare/PlantCare";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Homepage
            },
            {
                path: "/listed-plants",
                Component: ListedPlants
            },
            {
                path: "/plant-details/:idOfPlant",
                loader: () => fetch("/plants-data.json"),
                Component: PlantDetails
            },
            {
                path: "/plant-care",
                Component: PlantCare
            }
        ],
        errorElement: <ErrorMessage></ErrorMessage>
    }
])