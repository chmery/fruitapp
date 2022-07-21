export let fruits = [];

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
        const data = await getJSON("https://www.fruityvice.com/api/fruit/all");
        return data;
    } catch (error) {
        alert(error.message);
    }
};

const getFruitsImages = async () => {
    try {
        const data = await getJSON("https://fruitappi.herokuapp.com/fruits");
        return data;
    } catch (error) {
        alert(error.message);
    }
};

const assignData = async () => {
    const fruitsData = await getFruitsData();
    const fruitsImages = await getFruitsImages();

    fruitsData.forEach((fruit, i) => (fruit.image = fruitsImages[i].link));
    fruits = fruitsData;
};
assignData();
