import React, { PropTypes } from 'react';
import { View } from 'react-native';

import MapView from 'react-native-maps';

const XMarksTheSpot = ({ coordinates, center }) =>
  <View>
    <MapView.Polygon
      coordinates={coordinates}
      strokeColor="rgba(0,0,0,1)"
      strokeWidth={3}
    />
    <MapView.Polyline coordinates={[coordinates[0], coordinates[2]]} />
    <MapView.Polyline coordinates={[coordinates[1], coordinates[3]]} />
    <MapView.Marker coordinate={center} />
  </View>;

XMarksTheSpot.propTypes = {
  coordinates: PropTypes.array,
  center: PropTypes.object,
  zIndex: PropTypes.number
};

export default XMarksTheSpot;
