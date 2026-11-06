
const getAllPlantedTreesFromLocalDB = () => {
    const allPlantedTrees = localStorage.getItem("plantedList")
    if (allPlantedTrees) return JSON.parse(allPlantedTrees);

    return [];
}

const addPlantedListToLocalDB = (plant) => {
    const allTrees = getAllPlantedTreesFromLocalDB();

    const isAlreadyExist = allTrees.find(tree => tree.plantId == plant.plantId);
    if (!isAlreadyExist) {
        allTrees.push(plant);
        localStorage.setItem("plantedList", JSON.stringify(allTrees))
    }

}

export { getAllPlantedTreesFromLocalDB, addPlantedListToLocalDB };