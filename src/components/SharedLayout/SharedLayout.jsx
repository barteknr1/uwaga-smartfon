import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css'
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  )
};

export default SharedLayout