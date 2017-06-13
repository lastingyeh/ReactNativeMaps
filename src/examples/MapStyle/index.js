import React from 'react';
import { View } from 'react-native';

import MapView from 'react-native-maps';

import cStyles from '../../utils/styles';
import { LATITUDE, LONGITUDE, LATITUDE_DELTA, LONGITUDE_DELTA } from './styles';
import customStyle from './customStyle';

const MapStyle = ({ provider }) =>
  <View style={cStyles.container}>
    <MapView
      provider={provider}
      style={cStyles.map}
      initialRegion={{
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }}
      customMapStyle={customStyle}
    />
  </View>;

MapStyle.propTypes = {
  provider: MapView.ProviderPropType
};

export default MapStyle;
