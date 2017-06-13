import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import MapView from 'react-native-maps';

import MyLocationMapMarker from '../MyLocationMapMarker';

import cStyles from '../../utils/styles';
import styles, {
  LATITUDE,
  LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA
} from './styles';

class BugMarkerWontUpdate extends Component {
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
      amount: 0,
      enableHack: false
    };
  }

  increment = () => {
    this.setState({ amount: this.state.amount + 10 });
  };

  decrement = () => {
    this.setState({ amount: this.state.amount - 10 });
  };

  toggleHack = () => {
    this.setState({ enableHack: !this.state.enableHack });
  };

  render() {
    const { region, coordinate, amount, enableHack } = this.state;
    return (
      <View style={cStyles.container}>
        <MapView
          provider={this.props.provider}
          style={cStyles.map}
          initialRegion={region}
        >

          <MyLocationMapMarker
            coordinate={coordinate}
            heading={amount}
            enableHack={enableHack}
          />
        </MapView>
        <View style={cStyles.buttonContainer}>
          <TouchableOpacity
            onPress={this.toggleHack}
            style={[cStyles.bubble, cStyles.button, styles.hackButton]}
          >
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
              {enableHack ? 'Disable Hack' : 'Enable Hack'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={cStyles.buttonContainer}>
          <TouchableOpacity
            onPress={this.decrement}
            style={[cStyles.bubble, cStyles.button]}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.increment}
            style={[cStyles.bubble, cStyles.button]}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

BugMarkerWontUpdate.propTypes = {
  provider: MapView.ProviderPropType
};

export default BugMarkerWontUpdate;
