import React from 'react';
import AuthPage from 'views/auth_page/auth_page';

function Registration() {
  return <AuthPage path={'registration'} startStep={1} />;
}

export default Registration;
