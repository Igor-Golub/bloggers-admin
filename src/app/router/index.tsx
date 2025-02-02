import { createBrowserRouter } from 'react-router-dom';
import { BlogPage, BlogsPage } from '../../pages';

export const router = createBrowserRouter([
  {
    path: '/blogs',
    element: <BlogsPage />,
  },
  {
    path: '/blogs/:id',
    element: <BlogPage />,
  },
]);
