import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  userDataSelector,
  isLoadingSelector,
} from 'store/selectors/user_selector';
import {
  handleUpdateProfile,
  handleUpdateEmail,
  handleUpdatePassword,
} from 'store/operations/user_operations';
import Loader from 'components/loader/loader';
import {ReactComponent as Arrow} from 'img/svg/arrow.svg';
import s from './profile.module.css';

function Profile() {
  const userData = useSelector(userDataSelector);
  const isLoading = useSelector(isLoadingSelector);
  const [name, setName] = useState(userData.displayName);
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleChangeUserData = (e) => {
    e.preventDefault();

    if (name !== userData.displayName) {
      dispatch(handleUpdateProfile(name));
    }
    if (email !== userData.email) {
      dispatch(handleUpdateEmail(email));
    }
    if (password) {
      dispatch(handleUpdatePassword(password));
      setPassword('');
    }
  };

  return (
    <div className={s.container}>
      <button className={s.profileBtn} onClick={() => setShow(!show)}>
        Profile
        <Arrow fill="white" width="16px" className={s.arrowIcon} />
      </button>
      {isLoading ? (
        <Loader customStyle={true} />
      ) : (
        show && (
          <form onSubmit={handleChangeUserData}>
            <label className={s.label}>
              <span className={s.span}>Name:</span>
              <input
                className={s.input}
                type="text"
                autoComplete="off"
                onChange={handleChange}
                name="name"
                value={name}
              />
            </label>
            <label className={s.label}>
              <span className={s.span}>Email:</span>
              <input
                className={s.input}
                type="text"
                autoComplete="off"
                onChange={handleChange}
                name="email"
                value={email}
              />
            </label>
            <label className={s.label}>
              <span className={s.span}>Password:</span>
              <input
                className={s.input}
                type="password"
                autoComplete="off"
                onChange={handleChange}
                name="password"
                value={password}
              />
            </label>
            <button type="submit" className={s.saveChangesBtn}>
              Save
            </button>
          </form>
        )
      )}
    </div>
  );
}

export default Profile;
