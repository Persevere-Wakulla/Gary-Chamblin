import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function RecipesLayout() {
  const [recipes, setRecipes] = useState([]);
  let loading = false;

  useEffect(() => {
    loading = true;
    const fetchRecipes = async () => {
      const req = await fetch("http://localhost:3000/recipes");
      const res = await req.json();
      if (res.data) {
        setRecipes(res.data);
      }
    };
    if (loading) {
      fetchRecipes();
      loading = false;
    }
  }, []);

  return (
    <div className="recipes-layout">
      <Outlet context={{ recipes, setRecipes }} />
    </div>
  );
}

