export const fetchPizzas = async () => {
  try {
    const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY || "YOUR_API_KEY_HERE";
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=pizza&number=10&apiKey=${apiKey}`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.results.map((recipe, index) => ({
      id: recipe.id,
      category: index < 3 ? "Classic" : index < 6 ? "Veggie" : "Gourmet",
      name: recipe.title,
      description: recipe.summary ? recipe.summary.slice(0, 100) + "..." : "A delicious pizza",
      price: 10.99 + index * 2,
      image: recipe.image || "/assets/placeholder.jpg",
    }));
  } catch (error) {
    console.error("Error fetching pizzas from Spoonacular API:", error);
    return [];
  }
};