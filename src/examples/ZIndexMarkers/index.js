import React, { Component } from 'react';
import { Text, View } from 'react-native';

import MapView from 'react-native-maps';

import cStyles from '../../utils/styles';
import styles, {
  NUM_MARKERS,
  MARKERS_LATITUDE_DELTA,
  MARKERS_LONGITUDE_DELTA,
  PERCENT_SPECIAL_MARKERS,
  LATITUDE,
  LONGITUDE,
  MAP_LATITUDE_DELTA,
  MAP_LONGITUDE_DELTA
} from './styles';

class ZIndexMarkers extends Component {
  constructor(props) {
    super(props);

    const markerInfo = [];

    // -1 ~ 0.99999..
    for (let i = 1; i < NUM_MARKERS; i++) {
      markerInfo.push({
        latitude: (Math.random() * 2 - 1) * MARKERS_LATITUDE_DELTA + LATITUDE,
        longitude:
          (Math.random() * 2 - 1) * MARKERS_LONGITUDE_DELTA + LONGITUDE,
        isSpecial: Math.random() < PERCENT_SPECIAL_MARKERS,
        id: i
      });
    }

    this.state = {
      markerInfo
    };
  }

  render() {
    // set zIndex styles
    const markers = this.state.markerInfo.map(markerInfo =>
      <MapView.Marker
        coordinate={markerInfo}
        key={markerInfo.id}
        pinColor={markerInfo.isSpecial ? '#c5a620' : null}
        style={markerInfo.isSpecial ? styles.specialMarker : null}
      />
    );
    return (
      <View style={cStyles.container}>
        <MapView
          provider={this.props.provider}
          style={cStyles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: MAP_LATITUDE_DELTA,
            longitudeDelta: MAP_LONGITUDE_DELTA
          }}
        >
          {markers}
        </MapView>
        <View style={styles.textConatiner}>
          <Text>
            The yellow markers have a higher zIndex and appear above other
            markers
          </Text>
        </View>
      </View>
    );
  }
}

ZIndexMarkers.propTypes = {
  provider: MapView.ProviderPropType
};

export default ZIndexMarkers;
