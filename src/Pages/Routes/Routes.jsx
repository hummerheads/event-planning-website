import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Root from '../../layouts/Root';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root></Root>,
            children: [
                { 
                    path: '/', 
                    element: <Home></Home> 
                },
                {
                    path: '/login',
                    element: <Login></Login>
                }
                
            ],
        },
        
    ],
)

export default router;