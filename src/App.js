import React, {lazy} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {Login, Registration, Layout, ProtectedRoute} from 'views';
import {images, mainImage} from 'helpers/images';
import {Loader} from 'components';
import {useLoadMainImage, usePreCacheImage, useGetTechData} from 'hooks';
import 'react-toastify/dist/ReactToastify.css';

const Rockets = lazy(() => import('views/rockets/rockets.js'));
const Main = lazy(() => import('views/main/main'));
const SingleRocket = lazy(() => import('views/single_rocket/single_rocket'));

function App() {
  const isLogin = useGetTechData();
  const isLoading = useLoadMainImage(mainImage);
  usePreCacheImage(images);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoute isLogin={isLogin}>
                {isLoading ? <Loader /> : <Main />}
              </ProtectedRoute>
            }
          />
          <Route
            path="/dragons"
            element={
              <ProtectedRoute isLogin={isLogin}>
                <Rockets />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dragons/:id"
            element={
              <ProtectedRoute isLogin={isLogin}>
                <SingleRocket />
              </ProtectedRoute>
            }
          />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
