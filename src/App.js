
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Deatisl from './components/Content/Deatisl';
import Main from './Layout/Main';
import Resume from './components/Header/Resume';
import ConatctMe from './components/Header/ConatctMe';
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
