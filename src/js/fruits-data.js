export let fruits;

const getFruitsData = async () => {
    try {
        const response = await fetch("https://www.fruityvice.com/api/fruit/all");
        const data = await response.json();
        return data;
    } catch (error) {
        alert(error.message);
    }
};

const assignData = async () => (fruits = await getFruitsData());
assignData();
