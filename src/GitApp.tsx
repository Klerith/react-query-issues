import { FC } from 'react';
import { Outlet } from 'react-router';

export const GitApp: FC = () => {
  
  return (
    <div className="container mt-3">
    <h1>Git Issues <small>Seguimiento de problemas</small> </h1>
      <Outlet />
    </div>
  )
}

