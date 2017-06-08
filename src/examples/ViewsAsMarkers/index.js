import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

import PriceMarker from '../PriceMarker';

import cStyles from '../../utils/styles';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class ViewsAsMarkers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      coordinate: {
        latitude: LATITUDE,
        longitude: LONGITUDE
      },
      amount: 99
    };
  }

  increment() {
    this.setState({ amount: this.state.amount + 1 });
  }

  decrement() {
    this.setState({ amount: this.state.amount - 1 });
  }

  render() {
    return (
      <View style={cStyles.container}>
        <MapView
          provider={this.props.provider}
          style={cStyles.map}
          initialRegion={this.state.region}
        >
          <MapView.Marker coordinate={this.state.coordinate}>
            <PriceMarker amount={this.state.amount} />
          </MapView.Marker>
        </MapView>

        <View style={cStyles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.decrement()}
            style={[cStyles.bubble, cStyles.button]}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.increment()}
            style={[cStyles.bubble, cStyles.button]}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

ViewsAsMarkers.propTypes = {
  provider: MapView.ProviderPropType
};

export default ViewsAsMarkers;
