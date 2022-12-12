import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Component/Main/Main';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import ProjectDetails from './Component/ProjectDetails/ProjectDetails';



function App() {
  const router = createBrowserRouter([
       {
        path: '/', element: <Main></Main>, children: [
          {
            path: '/', 
            element: <Home></Home>, 
            loader: ()=>fetch('https://assianment-protfolio-server.vercel.app/product')
          },
          {
            path: '/aboutUs', element: <About></About>
          },
          {
            path: '/product/:id', 
            element: <ProjectDetails></ProjectDetails>,
            loader: ({params})=>fetch(`https://assianment-protfolio-server.vercel.app/product/${params.id}`)
          }
          
        ]
       }
  
  ])
  return (
    <div>
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
