import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import MapView from 'react-native-maps';

import { LATITUDE, LONGITUDE, LATITUDE_DELTA, LONGITUDE_DELTA } from './styles';

import cStyles from '../../utils/styles';

let id = 0;

const flagPinkImg = require('../../utils/assets/flag-pink.png');

class CustomMarkers extends Component {
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
          key: `foo${id++}`
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
          initialRegin={this.state.region}
          onPress={e => this.onMapPress(e)}
        >
          {this.state.markers.map(marker =>
            <MapView.Marker
              title={marker.key}
              image={flagPinkImg}
              key={marker.key}
              coordinate={marker.coordinate}
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

CustomMarkers.propTypes = {
  provider: MapView.ProviderPropType
};

export default CustomMarkers;
