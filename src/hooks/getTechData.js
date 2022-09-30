import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  handleLogout,
  handleCurrentFavoritList,
} from 'store/operations/user_operations';
import {
  permission,
  userErrorSelector,
  userEmailSelector,
} from 'store/selectors/user_selector';

const useGetTechData = () => {
  const isLogin = useSelector(permission);
  const error = useSelector(userErrorSelector);
  const email = useSelector(userEmailSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      dispatch(handleLogout());
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (email) {
      dispatch(handleCurrentFavoritList(email));
    }
  }, [dispatch, email]);

  return isLogin;
};

export default useGetTechData;
