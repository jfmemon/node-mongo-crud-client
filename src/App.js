import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import AddUser from './Components/AddUser';
import UpdateUser from './Components/UpdateUser';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/users')
    },
    {
      path: '/users',
      element: <AddUser></AddUser>
    },
    {
      path: '/update/:id',
      element: <UpdateUser></UpdateUser>,
      loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
    }
  ])


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
