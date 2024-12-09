import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import NotFound from './pages/NotFound';
import Recipes from './recipes/Recipes';
import RecipeDetails, { detailsLoader } from './recipes/RecipeDetails';
import Game from './pages/Game';
// import PasswordGen from './pages/PasswordGen';

// ?Admin Pages
import Admin, { adminLoader } from './pages/Admin';

//? User pages
import CreateUser from './pages/CreateUser';
import AccountSettings from './pages/AccountSettings';
import EditAccount from './pages/EditAccount';
import DeleteAccount from './pages/DeleteAccount';

//? Recipe pages
import CreateRecipe from './recipes/CreateRecipe';
import UserRecipes from './recipes/UserRecipes';
import EditRecipe from './recipes/EditRecipe';
import DeleteRecipe from './recipes/DeleteRecipe';

//? Layouts
import RootLayout from './layout/RootLayout';
import HelpLayout from './layout/HelpLayout';
import RecipesLayout from './layout/RecipesLayout';
import RecipesError from './recipes/RecipesError';





const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='admin' element={<Admin />} loader={adminLoader}/>
      <Route path='calculator' element={<Calculator />} />
      <Route path='game' element={<Game />} />
      <Route path='register' element={<CreateUser />} />
      <Route path='account' element={<AccountSettings />} />
      <Route path='edit' element={<EditAccount />} />
      <Route path='delete' element={<DeleteAccount />} />
      {/* <Route path='passwordGen' element={<PasswordGen />} /> */}


      <Route path='/help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>

      <Route path='/recipes' element={<RecipesLayout />}
        errorElement={<RecipesError />}>

        <Route
          index
          element={<Recipes />}
        />
        <Route path='createRecipe' element={<CreateRecipe />} />
        <Route path='userRecipes' element={<UserRecipes />} />
        <Route path='editRecipe/:recipeId' element={<EditRecipe />} />
        <Route path='deleteRecipe/:recipeId' element={<DeleteRecipe />} />

        <Route
          path=':id'
          element={<RecipeDetails />}
          loader={detailsLoader}
  
        />
      </Route>

      <Route path='/*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
