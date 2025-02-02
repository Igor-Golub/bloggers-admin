import { createBrowserRouter } from 'react-router-dom';
import { Main } from 'app/ui/Main.tsx';
import { BlogPage, BlogsPage, MainPage } from '../../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/blogs', element: <BlogsPage /> },
      { path: '/blogs/:id', element: <BlogPage /> },
    ],
  },
  { path: '*', element: <>dasds</> },
]);
