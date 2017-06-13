import React, { Component } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';

import MapView from 'react-native-maps';

import styles, {
  LATITUDE,
  LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA
} from './styles';

class LegalLabel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _legalLabelPositionY: new Animated.Value(10),
      legalLabelPositionY: 10
    };
  }

  componentDidMount() {
    this.state._legalLabelPositionY.addListener(({ value }) => {
      this.setState({
        legalLabelPositionY: value
      });
    });
  }

  componentWillUnmount() {
    this.state._legalLabelPositionY.removeAllListeners();
  }

  onPressAnimate = () => {
    Animated.sequence([
      Animated.spring(this.state._legalLabelPositionY, { toValue: 100 }),
      Animated.spring(this.state._legalLabelPositionY, { toValue: 10 })
    ]).start();
  };

  render() {
    const latlng = {
      latitude: LATITUDE,
      longitude: LONGITUDE
    };

    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          legalLabelInsets={{
            bottom: this.state.legalLabelPositionY,
            right: 10
          }}
          initialRegion={{
            ...latlng,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
        >
          <MapView.Marker coordinate={latlng} />
        </MapView>
        <View style={styles.username}>
          <TouchableOpacity onPress={this.onPressAnimate}>
            <Text style={styles.usernameText}>Animate</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bio}>
          <Text style={styles.bioText}>
            Bio description lorem ipsum Ullamco exercitation
            aliqua ullamco nostrud dolor et aliquip fugiat do
            aute fugiat velit in aliqua sit.
          </Text>
        </View>

        <View style={styles.photo}>
          <View style={styles.photoInner}>
            <Text style={styles.photoText}>
              Profile Photo
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default LegalLabel;
