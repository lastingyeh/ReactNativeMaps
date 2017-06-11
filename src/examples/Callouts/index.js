import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import MapView from 'react-native-maps';

import CustomCallout from '../CustomCallout';

import cStyles from '../../utils/styles';

import styles, {
  LATITUDE,
  LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  SPACE
} from './styles';

class Callouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      markers: [
        {
          coordinate: {
            latitude: LATITUDE + SPACE,
            longitude: LONGITUDE + SPACE
          }
        },
        {
          coordinate: {
            latitude: LATITUDE,
            longitude: LONGITUDE
          }
        },
        {
          coordinate: {
            latitude: LATITUDE + SPACE,
            longitude: LONGITUDE - SPACE
          }
        }
      ]
    };
  }

  show = () => {
    this.marker1.showCallout();
  };

  hide = () => {
    this.marker1.hideCallout();
  };

  render() {
    const { region, markers } = this.state;

    return (
      <View style={cStyles.container}>
        <MapView
          provider={this.props.provider}
          style={cStyles.map}
          initialRegion={region}
        >
          <MapView.Marker
            ref={ref => (this.marker1 = ref)}
            coordinate={markers[0].coordinate}
            title="This is a native view"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
          />
          <MapView.Marker coordinate={markers[1].coordinate}>
            <MapView.Callout style={styles.plainView}>
              <View>
                <Text>This is a plain view</Text>
              </View>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            coordinate={markers[2].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip style={styles.customView}>
              <CustomCallout>
                <Text>This is a custom callout bubble view</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>
        </MapView>
        <View style={cStyles.buttonContainer}>
          <TouchableOpacity
            onPress={this.show}
            style={[cStyles.bubble, cStyles.button]}
          >
            <Text>Show</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.hide}
            style={[cStyles.bubble, cStyles.button]}
          >
            <Text>Hide</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Callouts.propTypes = {
  provider: MapView.ProviderPropType
};

export default Callouts;
