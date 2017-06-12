import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import MapView from 'react-native-maps';
import {
  LATITUDE,
  LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  SPACE,
  ASPECT_RATIO
} from './styles';

import styles from './styles';
import cStyles from '../../utils/styles';

const flagBlueImg = require('../../utils/assets/flag-blue.png');
const flagPinkImg = require('../../utils/assets/flag-pink.png');

class MarkerTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapSnapshot: null
    };
  }

  takeSnapshot = () => {
    this.map.takeSnapshot(
      300,
      300,
      {
        latitude: LATITUDE - SPACE,
        longitude: LONGITUDE - SPACE,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01 * ASPECT_RATIO
      },
      (err, data) => {
        if (err) console.log(err);
        this.setState({ mapSnapshot: data });
      }
    );
  };

  render() {
    return (
      <View style={cStyles.container}>
        <MapView
          provider={this.props.provider}
          ref={ref => {
            this.map = ref;
          }}
          style={cStyles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
        >

          <MapView.Marker
            coordinate={{
              latitude: LATITUDE + SPACE,
              longitude: LONGITUDE + SPACE
            }}
            centerOffset={{ x: -18, y: -60 }}
            anchor={{ x: 0.69, y: 1 }}
            image={flagBlueImg}
          />
          <MapView.Marker
            coordinate={{
              latitude: LATITUDE - SPACE,
              longitude: LONGITUDE - SPACE
            }}
            centerOffset={{ x: -42, y: -60 }}
            anchor={{ x: 0.84, y: 1 }}
            image={flagPinkImg}
          />
        </MapView>

        <View style={cStyles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.takeSnapshot()}
            style={[cStyles.bubble, cStyles.button, { width: 120 }]}
          >
            <Text>Take snapshot</Text>
          </TouchableOpacity>
        </View>
        {this.state.mapSnapshot &&
          <TouchableOpacity
            style={[cStyles.container, styles.overlay]}
            onPress={() => this.setState({ mapSnapshot: null })}
          >
            <Image
              source={{ uri: this.state.mapSnapshot.uri }}
              style={{ width: 300, height: 300 }}
            />
          </TouchableOpacity>}
      </View>
    );
  }
}

MarkerTypes.propTypes = {
  provider: MapView.ProviderPropType
};

export default MarkerTypes;
