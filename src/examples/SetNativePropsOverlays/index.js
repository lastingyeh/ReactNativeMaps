import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import MapView from 'react-native-maps';

import cStyles from '../../utils/styles';
import {
  LATITUDE,
  LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  SPACE
} from './styles';

class SetNativePropsOverlays extends Component {
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

  handleColorChange = color => {
    const props = { strokeColor: color };
    this.circle.setNativeProps(props);
    this.polygon.setNativeProps(props);
    this.polyline.setNativeProps(props);
  };

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
            ref={ref => (this.circle = ref)}
            center={circle.center}
            radius={circle.radius}
            fillColor="rgba(255,255,255,0.6)"
            strokeColor="green"
            zIndex={3}
            strokeWidth={3}
          />
          <MapView.Polygon
            ref={ref => (this.polygon = ref)}
            coordinates={polygon}
            fillColor="rgba(255,255,255,0.6)"
            strokeColor="green"
            strokeWidth={2}
          />
          <MapView.Polyline
            ref={ref => (this.polyline = ref)}
            coordinates={polyline}
            strokeColor="green"
            strokeWidth={3}
          />

        </MapView>
        <View style={cStyles.buttonContainer}>
          <TouchableOpacity onPress={() => this.handleColorChange('green')}>
            <View style={cStyles.bubble}>
              <Text>Green</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handleColorChange('black')}>
            <View style={cStyles.bubble}>
              <Text>Black</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handleColorChange('red')}>
            <View style={cStyles.bubble}>
              <Text>Red</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SetNativePropsOverlays;
