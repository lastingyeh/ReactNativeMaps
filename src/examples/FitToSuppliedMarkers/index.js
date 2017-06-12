import React, { Component } from 'react';
import { View } from 'react-native';

import MapView from 'react-native-maps';

import cStyles from '../../utils/styles';
import {
  LATITUDE,
  LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  SPACE
} from './styles';

const markerIDs = ['Marker1', 'Marker2', 'Marker3', 'Marker4', 'Marker5'];
const timeout = 4000;

let animationTimeout;

class FocusOnMarkers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: {
        latitude: LATITUDE + SPACE,
        longitude: LONGITUDE + SPACE
      },
      b: {
        latitude: LATITUDE - SPACE,
        longitude: LONGITUDE - SPACE
      },
      c: {
        latitude: LATITUDE - SPACE * 2,
        longitude: LONGITUDE - SPACE * 2
      },
      d: {
        latitude: LATITUDE - SPACE * 3,
        longitude: LONGITUDE - SPACE * 3
      },
      e: {
        latitude: LATITUDE - SPACE * 4,
        longitude: LONGITUDE - SPACE * 4
      }
    };
  }

  componentDidMount() {
    animationTimeout = setTimeout(() => {
      this.focus1();
    }, timeout);
  }

  componentWillUnmount() {
    if (animationTimeout) {
      clearTimeout(animationTimeout);
    }
  }

  focusMap = (markers, animated) => {
    console.log(`Markers received to populate map: ${markers}`);

    this.map.fitToSuppliedMarkers(markers, animated);
  };

  focus1 = () => {
    animationTimeout = setTimeout(() => {
      this.focusMap([markerIDs[1], markerIDs[4]], true);

      this.focus2();
    }, timeout);
  };

  focus2 = () => {
    animationTimeout = setTimeout(() => {
      this.focusMap([markerIDs[2], markerIDs[3]], false);

      this.focus3();
    }, timeout);
  };

  focus3 = () => {
    animationTimeout = setTimeout(() => {
      this.focusMap([markerIDs[1], markerIDs[2]], false);

      this.focus4();
    }, timeout);
  };

  focus4 = () => {
    animationTimeout = setTimeout(() => {
      this.focusMap([markerIDs[0], markerIDs[3]], true);

      this.focus1();
    }, timeout);
  };

  render() {
    return (
      <View style={cStyles.container}>
        <MapView
          provider={this.props.provider}
          ref={ref => (this.map = ref)}
          style={cStyles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
        >
          <MapView.Marker identifier="Marker1" coordinate={this.state.a} />
          <MapView.Marker identifier="Marker2" coordinate={this.state.b} />
          <MapView.Marker identifier="Marker3" coordinate={this.state.c} />
          <MapView.Marker identifier="Marker4" coordinate={this.state.d} />
          <MapView.Marker identifier="Marker5" coordinate={this.state.e} />
        </MapView>
      </View>
    );
  }
}

FocusOnMarkers.propTypes = {
  provider: MapView.ProviderPropType
};

export default FocusOnMarkers;
