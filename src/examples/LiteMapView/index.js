import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import MapView from 'react-native-maps';

import styles, {
  LATITUDE,
  LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA
} from './styles';

const SAMPLE_REGION = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA
};

const LiteMapView = () => {
  const maps = [];

  for (let i = 0; i < 10; i++) {
    maps.push(
      <MapView
        liteMode
        key={`map_${i}`}
        style={styles.map}
        initialRegion={SAMPLE_REGION}
      />
    );
  }

  return (
    <ScrollView style={StyleSheet.absoluteFillObject}>
      {maps}
    </ScrollView>
  );
};

export default LiteMapView;
