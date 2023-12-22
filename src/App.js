//Importaion components
import {Root} from './components/Root/Root'
import { HomePage } from './components/HomePage/homePage';
import { PaintingsPage } from './components/PaintingsPage/paintingsPage';
import { AboutPage } from './components/AboutPage/aboutPage';
//Importation Router
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';


function App(){

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<Root/>}>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/paintings/:id' element={<PaintingsPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Route>
    </>
  ));

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
