import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Rocket, PullToRefresh, Loader, Error} from 'components';
import {getRockets} from '../../store/operations/rocket_operation';
import {
  rocketsImagesSelector,
  rocketsList,
} from 'store/selectors/rockets_selector';
import {usePreCacheImage} from 'hooks';
import s from './rockets.module.css';

function Rockets() {
  const rockets = useSelector(rocketsList);
  const rocketImage = useSelector(rocketsImagesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  usePreCacheImage(rocketImage);

  const handleRefresh = () => {
    dispatch(getRockets());
  };

  if (rockets.error) {
    return <Error />;
  }

  return (
    <div className={s.rocketsList}>
      <PullToRefresh onRefresh={handleRefresh}>
        {rockets.loading ? (
          <Loader />
        ) : (
          rockets.rockets.map((rocket) => (
            <Rocket
              id={rocket.id}
              images={rocket.flickr_images}
              name={rocket.name}
              key={rocket.id}
            />
          ))
        )}
      </PullToRefresh>
    </div>
  );
}

export default Rockets;
