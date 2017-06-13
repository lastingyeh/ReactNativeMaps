import React, { Component } from 'react';
import { View } from 'react-native';

import MapView from 'react-native-maps';

import XMarkerTheSpot from '../CustomOverlayXMarksTheSpot';
import cStyles from '../../utils/styles';
import { LATITUDE, LONGITUDE, LATITUDE_DELTA, LONGITUDE_DELTA } from './styles';

class CustomOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      coordinates: [
        {
          longitude: -122.442753,
          latitude: 37.79879
        },
        {
          longitude: -122.424728,
          latitude: 37.801232
        },
        {
          longitude: -122.422497,
          latitude: 37.790651
        },
        {
          longitude: -122.440693,
          latitude: 37.788209
        }
      ],
      center: {
        longitude: -122.4326648935676,
        latitude: 37.79418561114521
      }
    };
  }

  render() {
    const { coordinates, center, region } = this.state;
    return (
      <View style={cStyles.container}>
        <MapView
          provider={this.props.provider}
          style={cStyles.map}
          initialRegion={region}
        >
          <XMarkerTheSpot coordinates={coordinates} center={center} />
        </MapView>
      </View>
    );
  }
}

CustomOverlay.propTypes = {
  provider: MapView.ProviderPropType
};

export default CustomOverlay;
