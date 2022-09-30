import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import {getRocketById, getRockets} from 'store/operations/rocket_operation';
import {singleRocket} from 'store/selectors/rockets_selector';
import {Error, Loader, Stats, Slider} from 'components';
import s from './single_rocket.module.css';

function SingleRocket() {
  const rocket = useSelector(singleRocket);
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(getRockets());
    dispatch(getRocketById(id));
  }, [dispatch, id]);

  if (rocket.error) {
    return <Error />;
  }
  return (
    <div>
      {rocket.loading ? (
        <Loader />
      ) : (
        <div>
          <Parallax pages={3} style={{top: '0', left: '0', zIndex: '1'}}>
            <ParallaxLayer offset={0} speed={2} className={s.ParallaxLayerOne}>
              <div className={s.firstSlideWrapper}>
                <h1 className={s.rocketName}>{rocket.rocket.name}</h1>
                <p className={s.description}>
                  {rocket.rocket.description}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={rocket.rocket.wikipedia}
                    className={s.wikiLink}
                  >
                    Wikipedia
                  </a>
                </p>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={1}
              className={s.ParallaxLayerTwo}
              style={{
                backgroundImage: 'url(https://i.imgur.com/iz29cHf.jpg)',
                backgroundSize: 'cover',
                borderLeft: '10px solid black',
              }}
            />
            <ParallaxLayer
              offset={1}
              speed={3}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
              }}
            >
              <Stats name={rocket.rocket.name} id={rocket.rocket.id} />
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={1}>
              <Slider images={rocket.rocket.images} />
            </ParallaxLayer>
          </Parallax>
        </div>
      )}
    </div>
  );
}

export default SingleRocket;
