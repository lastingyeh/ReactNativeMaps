import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { MAP_TYPES } from 'react-native-maps';

const { width, height } = Dimensions.get('window');
import cStyles from '../../utils/styles';

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class DisplayLatLng extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    };
  }

  onRegionChange = region => {
    this.setState({ region });
  };

  jumpRandom = () => {
    this.setState({ region: this.randomRegion() });
  };

  animateRandom = () => {
    this.map.animateToRegion(this.randomRegion());
  };

  randomRegion = () => {
    const { region } = this.state;

    return {
      ...this.state.region,
      latitude: region.latitude + (Math.random() - 0.5) * (region.latitude / 2),
      longitude: region.longitude +
        (Math.random() - 0.5) * (region.longitude / 2)
    };
  };

  render() {
    return (
      <View style={cStyles.container}>
        <MapView
          provider={this.props.provider}
          ref={ref => (this.map = ref)}
          mapType={MAP_TYPES.TERRAIN}
          style={cStyles.map}
          initialRegion={this.state.region}
          onRegionChange={region => this.onRegionChange(region)}
        />
        <View style={[cStyles.bubble, cStyles.latlng]}>
          <Text style={{ textAlign: 'center' }}>
            {this.state.region.latitude.toPrecision(7)}
            {this.state.region.longitude.toPrecision(7)}
          </Text>
        </View>
        <View style={cStyles.buttonContainer}>
          <TouchableOpacity
            onPress={this.jumpRandom}
            style={[cStyles.bubble, cStyles.button]}
          >
            <Text>Jump</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.animateRandom}
            style={[cStyles.bubble, cStyles.button]}
          >
            <Text>Animate</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

DisplayLatLng.propTypes = {
  provider: MapView.ProviderPropType
};

export default DisplayLatLng;
