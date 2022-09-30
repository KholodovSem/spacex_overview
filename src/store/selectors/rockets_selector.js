import {createSelector} from 'reselect';

const isLoading = (state) => state.rockets.isLoading;

const error = (state) => state.rockets.error;

export const rockets = (state) => state.rockets.allRockets;

const rocket = (state) => state.rockets.rocketData;

export const singleRocket = createSelector(
    [isLoading, error, rocket],
    (loading, error, rocket) => ({loading, error, rocket}),
);

export const rocketsList = createSelector(
    [isLoading, error, rockets],
    (loading, error, rockets) => ({loading, error, rockets}),
);

export const rocketStatsSelector = createSelector(
    [rockets, (state, name) => name],
    (rockets, name) =>
      Object.entries(
          rockets
              .map((rocket) =>
          rocket.name === name ?
            {
              height: rocket.height_w_trunk.meters,
              diameter: rocket.diameter.meters,
              launch_payload_mass: rocket.launch_payload_mass.kg,
              return_payload_mass: rocket.return_payload_mass.kg,
              first_flight: rocket.first_flight,
              orbit_duration_year: rocket.orbit_duration_yr,
            } :
            null,
              )
              .find((rocket) => rocket !== null),
      ),
);

export const rocketsImagesSelector = createSelector([rockets], (rockets) => {
  return rockets.map((rocket) => rocket.flickr_images).flat();
});
