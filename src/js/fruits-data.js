export let fruits = [];

export const isDataAssigned = () => (fruits.length === 0 ? false : true);

const getJSON = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        throw error;
    }
};

const getFruitsData = async () => {
    try {
        const data = await getJSON(
            "https://corsus.herokuapp.com/https://www.fruityvice.com/api/fruit/all"
        );
        return data;
    } catch (error) {
        throw error;
    }
};

const getFruitsImages = async () => {
    try {
        const data = await getJSON(
            "https://corsus.herokuapp.com/https://fruitappi.herokuapp.com/fruits"
        );
        return data;
    } catch (error) {
        throw error;
    }
};

const assignData = async () => {
    try {
        const fruitsData = await getFruitsData();
        const fruitsImages = await getFruitsImages();

        const fruitsDataWithImages = await fruitsData.map((fruit) => ({
            ...fruit,
            image: fruitsImages[fruit.name.toLowerCase()],
        }));
        fruits = fruitsDataWithImages;
    } catch (error) {
        alert(error.message);
    }
};
assignData();
