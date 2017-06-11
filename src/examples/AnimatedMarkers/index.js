import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import MapView, { AnimatedRegion } from 'react-native-maps';

import cStyles from '../../utils/styles';
import {
  width,
  height,
  LATITUDE,
  LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA
} from './styles';

class AnimatedMarkers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE
      })
    };
  }

  animate = () => {
    const { coordinate } = this.state;
    coordinate
      .timing({
        latitude: LATITUDE + (Math.random() - 0.5) * (LATITUDE_DELTA / 2),
        longitude: LONGITUDE + (Math.random() - 0.5) * (LONGITUDE_DELTA / 2)
      })
      .start();
  };

  render() {
    return (
      <View style={cStyles.container}>
        <MapView
          provider={this.props.provider}
          style={cStyles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
        >
          <MapView.Marker.Animated coordinate={this.state.coordinate} />
        </MapView>
        <View style={cStyles.buttonContainer}>
          <TouchableOpacity
            onPress={this.animate}
            style={[cStyles.bubble, cStyles.button]}
          >
            <Text>Animate</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

AnimatedMarkers.propTypes = {
  provider: MapView.ProviderPropType
};

export default AnimatedMarkers;
