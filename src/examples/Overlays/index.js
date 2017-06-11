import React, { Component } from 'react';
import { View, Text } from 'react-native';

import MapView from 'react-native-maps';

import cStyles from '../../utils/styles';
import styles, {
  LATITUDE,
  LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  SPACE
} from './styles';

class Overlays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      circle: {
        center: {
          latitude: LATITUDE + SPACE,
          longitude: LONGITUDE + SPACE
        },
        radius: 700
      },
      polygon: [
        {
          latitude: LATITUDE + SPACE,
          longitude: LONGITUDE + SPACE
        },
        {
          latitude: LATITUDE - SPACE,
          longitude: LONGITUDE - SPACE
        },
        {
          latitude: LATITUDE - SPACE,
          longitude: LONGITUDE + SPACE
        }
      ],
      polyline: [
        {
          latitude: LATITUDE + SPACE,
          longitude: LONGITUDE - SPACE
        },
        {
          latitude: LATITUDE - 2 * SPACE,
          longitude: LONGITUDE + 2 * SPACE
        },
        {
          latitude: LATITUDE - SPACE,
          longitude: LONGITUDE - SPACE
        },
        {
          latitude: LATITUDE - 2 * SPACE,
          longitude: LONGITUDE - SPACE
        }
      ]
    };
  }
  render() {
    const { region, circle, polygon, polyline } = this.state;
    return (
      <View style={cStyles.container}>
        <MapView
          provider={this.props.provider}
          style={cStyles.map}
          initialRegion={region}
        >
          <MapView.Circle
            center={circle.center}
            radius={circle.radius}
            fillColor="rgba(255,255,255,1)"
            strokeColor="rgba(0,0,0,0.5)"
            zIndex={2}
            strokeWidth={2}
          />
          <MapView.Polygon
            coordinates={polygon}
            fillColor="rgba(0,200,0,0.5)"
            strokeColor="rgba(0,0,0,0.5)"
            strokeWidth={2}
          />
          <MapView.Polyline
            coordinates={polyline}
            strokeColor="rgba(0,0,200,0.5)"
            strokeWidth={3}
            lineDashPattern={[5, 2, 3, 2]}
          />
        </MapView>
        <View style={cStyles.buttonContainer}>
          <View style={cStyles.bubble}>
            <Text>Render circles,polygons,and polylines</Text>
          </View>
        </View>
      </View>
    );
  }
}

Overlays.propTypes = {
  provider: MapView.ProviderPropType
};

export default Overlays;
