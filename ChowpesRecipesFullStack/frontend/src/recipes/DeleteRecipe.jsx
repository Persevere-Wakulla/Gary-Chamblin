import React from 'react';
import { NavLink, useOutletContext, useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';

const DeleteRecipe = () => {
    const navigate = useNavigate()
    const { recipeId } = useParams()
    const {recipes, setRecipes} = useOutletContext()

  
    const handleDeleteRecipe = () => {
        confirm('Are you sure you wish to delete this Recipe')
        fetch(`http://localhost:3000/recipes/${recipeId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            mode: "cors"
        }).then((res) =>
             res.json()
        
        ).then((data) => {
            console.dir(data.message)
            const newRecipes = [...recipes.filter(x=> x._id !== recipeId)];
            setRecipes(newRecipes)
            // console.log(newRecipes);
            navigate('/recipes/UserRecipes')
        }).catch((err) => {
            console.log(err);
        })
    }
  return (
    <div className="text-center">
          <input type="hidden" name="_id" defaultValue={recipes._id} />
          <input type="hidden" name="userId" defaultValue={recipes.userId} />
    <h1>Delete Recipe</h1>
    <BackButton />
        <h3>Are you sure you want to delete this recipe?</h3>
    <div className="d-flex justify-content-center gap-2">

        <NavLink onClick={handleDeleteRecipe} className="bg-danger w-25 rounded-4 p-2 fs-4 text-black">Yes</NavLink>
       <NavLink to='/recipes/UserRecipes' className='fs-4 text-black bg-primary w-25 rounded-4 p-2'>No</NavLink>
    </div>
</div>
  )
}

export default DeleteRecipe