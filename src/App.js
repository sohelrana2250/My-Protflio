
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Deatisl from './components/Content/Deatisl';
import Main from './Layout/Main';
import Resume from './components/Header/Resume';
import ConatctMe from './components/Header/ConatctMe';
import Project1 from './components/About/Project1';
import Project2 from './components/About/Project2';
import Project3 from './components/About/Project3';
import Project4 from './components/About/Project4';
import About from './components/About/About';
import Blog from './components/About/Blog';
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Deatisl></Deatisl>
        },
        {
          path: '/Resume',
          element: <Resume></Resume>
        },
        {
          path: '/contactMe',
          element: <ConatctMe></ConatctMe>
        },
        {
          path: '/details1',
          element: <Project1></Project1>
        },
        {
          path: '/details2',
          element: <Project2></Project2>
        },
        {
          path: '/details3',
          element: <Project3></Project3>
        },
        {
          path: '/details4',
          element: <Project4></Project4>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }

      ]
    }

  ])
  return (
    <div className="">

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
