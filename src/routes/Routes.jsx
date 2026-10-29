import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import ListedPlants from "../plants/ListedPlants";
import ErrorMessage from "../pages/errorMessage/ErrorMessage";

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
            }
        ],
        errorElement: <ErrorMessage></ErrorMessage>
    }
])