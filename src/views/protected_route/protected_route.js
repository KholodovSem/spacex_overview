import React from 'react';
import {Navigate} from 'react-router-dom';

function ProtectedRoute({children, isLogin}) {
  return isLogin ? children : <Navigate to="/registration" replace />;
}

export default ProtectedRoute;
