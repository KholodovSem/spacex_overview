import React, {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {rocketStatsSelector} from 'store/selectors/rockets_selector';
import s from './stats.module.css';

function Stats({name}) {
  const rocketStats = useSelector((state) => rocketStatsSelector(state, name));
  const params = useParams();

  const normalizeText = (text) => {
    return text.toUpperCase().split('_').join(' ');
  };

  const validateText = (text) => {
    switch (text) {
      case 'LAUNCH PAYLOAD MASS':
        return ' kg';
      case 'RETURN PAYLOAD MASS':
        return ' kg';
      case 'DIAMETER':
        return ' m';
      case 'HEIGHT':
        return ' m';
      default:
        return '';
    }
  };

  return (
    <div className={'id' in params ? s.overview : ''}>
      {rocketStats &&
        rocketStats.map((roceketParam) => (
          <div className={s.overviewTextWrapper} key={roceketParam[0]}>
            <span className={s.overviewText}>
              {normalizeText(roceketParam[0])}
            </span>
            <span className={s.overviewText}>
              {roceketParam[1] + validateText(normalizeText(roceketParam[0]))}
            </span>
          </div>
        ))}
    </div>
  );
}

export default Stats;
