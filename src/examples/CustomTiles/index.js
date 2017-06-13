import React, { Component } from 'react';
import { View, Text } from 'react-native';

import MapView, { MAP_TYPES, PROVIDER_DEFAULT } from 'react-native-maps';

import cStyles from '../../utils/styles';
import styles, {
  LATITUDE,
  LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA
} from './styles';

class CustomTiles extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    };
  }

  get mapType() {
    return this.props.provider === PROVIDER_DEFAULT
      ? MAP_TYPES.STANDARD
      : MAP_TYPES.NONE;
  }

  render() {
    const { region } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          mapType={this.mapType}
          style={styles.map}
          initialRegion={region}
        >

          <MapView.UrlTile
            urlTemplate="http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
            zIndex={-1}
          />

        </MapView>
        <View style={styles.buttonContainer}>
          <View style={styles.bubble}>
            <Text>Custom Tiles</Text>
          </View>
        </View>
      </View>
    );
  }
}

CustomTiles.propTypes = {
  provider: MapView.ProviderPropType
};

export default CustomTiles;
