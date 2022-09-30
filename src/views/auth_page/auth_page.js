import React, {useState, useRef} from 'react';
import {SwitchTransition, CSSTransition} from 'react-transition-group';
import {useDispatch, useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {labelRP, labelLP, changeStepRP, changeStepLP} from 'helpers/index';
import {isLoadingSelector, permission} from 'store/selectors/user_selector';
import {
  handleRegistration,
  handleLogin,
} from 'store/operations/user_operations';
import {Loader} from 'components';

const initialState = {
  name: '',
  email: '',
  password: '',
};

function AuthPage({path, startStep}) {
  const [userData, setUserData] = useState(initialState);
  const isLogin = useSelector(permission);
  const isLoading = useSelector(isLoadingSelector);
  const [toggle, setToggle] = useState(false);
  const [step, setStep] = useState(startStep);
  const dispatch = useDispatch();

  const nodeRef = useRef(null);

  const handleChange = (e) => {
    const value = e.currentTarget.value;

    switch (step) {
      case 1:
        setUserData((prevState) => ({...prevState, name: value}));
        break;
      case 2:
        setUserData((prevState) => ({...prevState, email: value}));
        break;
      case 3:
        setUserData((prevState) => ({...prevState, password: value}));
        break;
      default:
        return;
    }
  };

  const handleButtonClick = () => {
    const {email, password, name} = userData;

    setToggle(!toggle);

    if (path) {
      if (step === 3) {
        dispatch(handleRegistration({email, password, displayName: name}));
        setUserData(initialState);
      }
      setStep(changeStepRP);
    }

    if (!path) {
      if (step === 3) {
        dispatch(handleLogin({email, password}));
        setUserData(initialState);
      }
      setStep(changeStepLP);
    }
  };

  if (isLogin) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="authPage">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <h2 className="title">
              {path ? 'Simple steps to sign up' : 'Log in to your account'}
            </h2>
          </div>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={toggle}
              classNames="fade"
              nodeRef={nodeRef}
              timeout={1000}
            >
              <div className="input-wrapper" ref={nodeRef}>
                <form>
                  <label className="input-label">
                    <span className="step">
                      {path ? labelRP(step) : labelLP(step)}
                    </span>
                    <input
                      value={
                        step === 1 ?
                          userData.name :
                          step === 2 ?
                          userData.email :
                          userData.password
                      }
                      type={step === 3 ? 'password' : 'text'}
                      autoComplete="off"
                      className="input"
                      onChange={handleChange}
                    />
                  </label>
                  <button
                    onClick={handleButtonClick}
                    type="button"
                    className="button"
                  >
                    {step === 3 ? (path ? 'Sign Up' : 'Sign In') : 'Enter'}
                  </button>
                </form>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </>
      )}
    </div>
  );
}

export default AuthPage;
