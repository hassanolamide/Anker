
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Deal from './component/Deal';
import Deal2 from './component/Deal2';
import Dealinnerr from './component/Dealinnerr';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Deal/>,
  },
  {
    path: '/deal2',
    element: <Deal2 />,
  },{
    path:'/dealinner',
    element:<Dealinnerr/>
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;