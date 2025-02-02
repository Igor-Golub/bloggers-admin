import { createBrowserRouter } from 'react-router-dom';
import { BlogsPage } from "../../pages";

export const router = createBrowserRouter([
    {
        path: '/blogs',
        element: <BlogsPage />
    }
])