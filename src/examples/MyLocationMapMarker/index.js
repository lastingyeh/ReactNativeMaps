import React, { PureComponent, PropTypes } from 'react';
import { Text, View, PermissionsAndroid, Platform } from 'react-native';

import MapView from 'react-native-maps';
import isEqual from 'lodash/isEqual';

import styles from './styles';

const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000
};

const ANCHOR = { x: 0.5, y: 0.5 };

class MyLocationMapMarker extends PureComponent {
  constructor(props) {
    super(props);
    this.mounted = false;
    this.state = { myPosition: null };
  }

  componentDidMount() {
    this.mounted = true;

    if (this.props.coordinate) return;

    if (Platform.OS === 'android') {
      PermissionsAndroid.requestPermission(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      ).then(granted => {
        if (granted && this.mounted) this.watchLocation();
      });
    } else {
      this.watchLocation();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
    if (this.watchID) navigator.geolocation.clearWatch(this.watchID);
  }

  watchLocation = () => {
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        const myLastPosition = this.state.myPosition;
        const myPosition = position.coords;

        if (!isEqual(myPosition, myLastPosition)) {
          this.setState({
            myPosition
          });
        }
      },
      null,
      this.props.geolocationOptions
    );
  };

  render() {
    let { heading, coordinate } = this.props;

    if (!coordinate) {
      const { myPosition } = this.state;
      if (!myPosition) return null;
      coordinate = myPosition;
      heading = myPosition.heading;
    }

    const rotate = typeof heading === 'number' && heading >= 0
      ? `${heading}deg`
      : null;

    return (
      <MapView.Marker
        anchor={ANCHOR}
        style={styles.mapMarker}
        {...this.props}
        coordinate={coordinate}
      >
        <View style={styles.container}>
          <View style={styles.markerHalo} />
          {rotate &&
            <View style={[styles.heading, { transform: [{ rotate }] }]}>
              <View style={styles.headingPointer} />
            </View>}
        </View>
      </MapView.Marker>
    );
  }
}

MyLocationMapMarker.propTypes = {
  ...MapView.Marker.propTypes,
  coordinate: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  }),
  children: PropTypes.node,
  geolocationOptions: PropTypes.shape({
    enableHighAccuracy: PropTypes.bool,
    timeout: PropTypes.number,
    maximumAge: PropTypes.number
  }),
  heading: PropTypes.number,
  enableHack: PropTypes.bool
};

MyLocationMapMarker.defaultProps = {
  enableHack: false,
  geolocationOptions: GEOLOCATION_OPTIONS
};

export default MyLocationMapMarker;
