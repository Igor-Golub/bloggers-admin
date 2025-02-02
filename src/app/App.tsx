import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Main } from './ui/Main.tsx';

export function App() {
  return (
    <Main>
      <RouterProvider router={router} />
    </Main>
  );
}

