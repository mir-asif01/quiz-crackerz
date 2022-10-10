import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Main/Main';
import Questions from './Components/Questions/Questions.jsx'
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import Error from './Components/Error/Error';

function App() {

  const routes = createBrowserRouter([
    {
      path : '/',element : <Main></Main>,
      children : [
        {path:'/',element: <Questions></Questions>},
        {path : 'statistics',element: <Statistics></Statistics>},
        {path : 'blog',element: <Blog></Blog>},
      ]
    },
    {path:'*',element:<Error></Error>}

  ])
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
