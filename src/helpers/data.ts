import {Feature, FeatureHash} from './interfaces';

const isMovie = (feature) => {
  const {
    attributes: {Type},
  } = feature;
  return /movie/i.test(Type);
};

export const hashFeatures = (features: Array<Feature>) => {
  return features.reduce((map: FeatureHash, feature: Feature) => {
    if (
      isMovie(feature) &&
      typeof feature.geometry.x === 'number' &&
      typeof feature.geometry.y === 'number'
    ) {
      const title = feature.attributes.Title.replace(/[ \t]+$/, '');
      if (map[title]) {
        map[title].push(feature);
      } else {
        map[title] = [feature];
      }
    }
    return map;
  }, {});
};
