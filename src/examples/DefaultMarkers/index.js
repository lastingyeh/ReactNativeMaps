import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import MapView from 'react-native-maps';

import cStyles from '../../utils/styles';
import { LATITUDE, LONGITUDE, LATITUDE_DELTA, LONGITUDE_DELTA } from './styles';

let id = 0;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

class DefaultMarkers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      markers: []
    };
  }

  onMapPress = e => {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor()
        }
      ]
    });
  };

  render() {
    return (
      <View style={cStyles.container}>
        <MapView
          provider={this.props.provider}
          style={cStyles.map}
          initialRegion={this.state.region}
          onPress={e => this.onMapPress(e)}
        >
          {this.state.markers.map(marker =>
            <MapView.Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
            />
          )}
        </MapView>
        <View style={cStyles.buttonContainer}>
          <TouchableHighlight
            onPress={() => this.setState({ markers: [] })}
            style={cStyles.bubble}
          >
            <Text>Tap to create a marker of random color</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default DefaultMarkers;
