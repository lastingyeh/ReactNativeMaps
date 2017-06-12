import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import MapView from 'react-native-maps';

import cStyles from '../../utils/styles';
import {
  LATITUDE,
  LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  SPACE,
  DEFAULT_PADDING
} from './styles';

function createMarker(modifier = 1) {
  return {
    latitude: LATITUDE - SPACE * modifier,
    longitude: LONGITUDE - SPACE * modifier
  };
}

const MARKERS = [
  createMarker(),
  createMarker(2),
  createMarker(3),
  createMarker(4)
];

class FitToCoordinates extends Component {
  fitPadding = () => {
    this.map.fitToCoordinates([MARKERS[2], MARKERS[3]], {
      edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
      animated: true
    });
  };

  fitBottomTwoMarkers = () => {
    this.map.fitToCoordinates([MARKERS[2], MARKERS[3]], {
      edgePadding: DEFAULT_PADDING,
      animated: true
    });
  };

  fitAllMarkers = () => {
    this.map.fitToCoordinates(MARKERS, {
      edgePadding: DEFAULT_PADDING,
      animated: true
    });
  };

  render() {
    return (
      <View style={cStyles.container}>
        <MapView
          ref={ref => (this.map = ref)}
          style={cStyles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
        >
          {MARKERS.map((marker, i) =>
            <MapView.Marker key={i} coordinate={marker} />
          )}
        </MapView>
        <View style={[cStyles.buttonContainer, { flexDirection: 'column' }]}>
          <TouchableOpacity
            onPress={this.fitPadding}
            style={[cStyles.bubble, cStyles.button]}
          >
            <Text>Fit Bottom Two Markers with Padding</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={this.fitBottomTwoMarkers}
          style={[cStyles.bubble, cStyles.button]}
        >
          <Text>Fit Bottom Two Markers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.fitAllMarkers}
          style={[cStyles.bubble, cStyles.button]}
        >
          <Text>Fit All Markers</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default FitToCoordinates;
