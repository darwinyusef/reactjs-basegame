import { useRoutes } from 'react-router-dom';

import Login from '../Login';
import BoardGame from '../BoardGame';
import NotFound from '../NotFound';


const AppRoutes = () => {
    if (localStorage.getItem('login') == 'logueado') {
        return useRoutes([
            { path: "/", element: <BoardGame /> },
            { path: "/*", element: <NotFound /> },
        ]);
    } else {
        return useRoutes([
            { path: "/", element: <Login /> },
            { path: "/board", element: <BoardGame />  /*Eliminar luego de maquetar y generar interactividad*/ },
            { path: "/*", element: <NotFound /> },
        ]);
    }
}

export default AppRoutes;