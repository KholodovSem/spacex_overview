import {createSelector} from 'reselect';
import {rockets} from './rockets_selector';

const favoritsList = (state) => state.user.favorits;

export const userDataSelector = (state) => state.user.userData;

export const permission = (state) => state.user.isLogin;

export const isLoadingSelector = (state) => state.user.isLoading;

export const userErrorSelector = (state) => state.user.error;

export const userEmailSelector = (state) => state.user.userData.email;

export const favoritRocketId = createSelector(
    [favoritsList, (state, id) => id],
    (favoritsList, id) => favoritsList.find((favorit) => favorit === id),
);

export const favoritRocketObjectList = createSelector(
    [rockets, favoritsList],
    (rockets, favoritsList) =>
      favoritsList
          .map((favorit) => rockets.filter((rocket) => rocket.id === favorit))
          .flat(),
);
