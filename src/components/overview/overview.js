import React from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';
import {
  handleAddToFavorit,
  handleRemoveFromFavorit,
} from 'store/operations/user_operations';
import {
  favoritRocketId,
  userEmailSelector,
  isLoadingSelector,
} from 'store/selectors/user_selector';
import Stats from './stats';
import Loader from 'components/loader/loader';
import s from './overview.module.css';

function Overview({name, id}) {
  const email = useSelector(userEmailSelector);
  const favorit = useSelector((state) => favoritRocketId(state, id));
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(handleAddToFavorit({email, newFavorit: id}));
  };

  const handleRemoveFromFavorits = () => {
    dispatch(handleRemoveFromFavorit({email, id}));
  };

  return (
    <div className={s.rocketInfo}>
      <div className={s.title}>
        <h2 className={s.text}>{name}</h2>
        <span className={s.secondText}>OVERVIEW</span>
      </div>

      {isLoading ? (
        <Loader customStyle={true} />
      ) : (
        <>
          <Stats name={name} id={id} />
          <div className={s.buttonsList}>
            <NavLink className={s.link} to={`${id}`}>
              Read more
            </NavLink>
            {favorit ? (
              <button
                className={s.favoriteBtn}
                onClick={handleRemoveFromFavorits}
              >
                <AiFillStar className={s.favoriteIcon} />
              </button>
            ) : (
              <button className={s.favoriteBtn} onClick={handleAddToFavorites}>
                <AiOutlineStar className={s.favoriteIcon} />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Overview;
