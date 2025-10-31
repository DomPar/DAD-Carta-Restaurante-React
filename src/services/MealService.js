export default async function getData(searchTerm) {
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();

        const data = result.meals.map((meal) => ({
            id: meal.idMeal,
            name: meal.strMeal,
            category: "Seafood",
            thumb: meal.strMealThumb,
            price: (Math.random() * 20 + 5).toFixed(2),
        }));

        if (searchTerm && searchTerm.trim() !== "") {
            const lower = searchTerm.toLowerCase();
            return data.filter((item) => item.name.toLowerCase().includes(lower));
            }
        return data;
    } catch (error) {
        throw error; 
    }
}