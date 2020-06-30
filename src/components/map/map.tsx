import * as React from 'react';
// @ts-ignore
import Map from './platformMaps/map';
import {MapContainerLayout} from './map.style';
import {useAbqOpenData} from './mapHooks';
import {useEffect} from 'react';

const MapContainer: React.FC = () => {
  // @ts-ignore
  const [{data, isLoading, isError}, setFetchUrl] = useAbqOpenData();
  useEffect(() => {
    // @ts-ignore
    // typscript doesn't like hooks =/
    setFetchUrl(
      'https://c2t-cabq-open-data.s3.amazonaws.com/film-locations-json-all-records_03-19-2020.json',
    );
  }, [setFetchUrl]);
  const initialRegion = {
    latitude: 35.0844,
    longitude: -106.6504,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  };
  return (
    <MapContainerLayout>
      <Map
        initialRegion={initialRegion}
        movies={data}
        loading={isLoading}
        error={isError}
      />
    </MapContainerLayout>
  );
};

export default MapContainer;
