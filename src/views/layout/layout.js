import React, {Suspense} from 'react';
import {Outlet} from 'react-router-dom';
import Header from 'components/header/header';
import Loader from 'components/loader/loader';

function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
