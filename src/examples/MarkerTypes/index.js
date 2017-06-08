import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import MapView from 'react-native-maps';

// import flagBlueImg from '../../utils/assets/flag-blue.png';
// import flagPinkImg from '../../utils/assets/flag-pink.png';

import cStyles from '../../utils/styles';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

const flagBlueImg = require('../../utils/assets/flag-blue.png');
const flagPinkImg = require('../../utils/assets/flag-pink.png');

class MarkerTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker1: true,
      marker2: false
    };
  }

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
          <MapView.Marker
            onPress={() => this.setState({ marker1: !this.state.marker1 })}
            coordinate={{
              latitude: LATITUDE + SPACE,
              longitude: LONGITUDE + SPACE
            }}
            centerOffset={{ x: -18, y: -60 }}
            anchor={{ x: 0.69, y: 1 }}
            image={this.state.marker1 ? flagBlueImg : flagPinkImg}
          >
            <Text style={styles.marker}>X</Text>
          </MapView.Marker>

          <MapView.Marker
            onPress={() => this.setState({ marker2: !this.state.marker2 })}
            coordinate={{
              latitude: LATITUDE - SPACE,
              longitude: LONGITUDE - SPACE
            }}
            centerOffset={{ x: -42, y: -60 }}
            anchor={{ x: 0.84, y: 1 }}
            image={this.state.marker2 ? flagBlueImg : flagPinkImg}
          />

          <MapView.Marker
            onPress={() => this.setState({ marker2: !this.state.marker2 })}
            coordinate={{
              latitude: LATITUDE + SPACE,
              longitude: LONGITUDE - SPACE
            }}
            centerOffset={{ x: -42, y: -60 }}
            anchor={{ x: 0.84, y: 1 }}
            opacity={0.6}
            image={this.state.marker2 ? flagBlueImg : flagPinkImg}
          />

        </MapView>
      </View>
    );
  }
}

MarkerTypes.propTypes = {
  provider: MapView.ProviderPropType
};

export default MarkerTypes;
