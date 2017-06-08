import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';

import MapView from 'react-native-maps';

import PriceMarker from '../PriceMarker';

import cStyles from '../../utils/styles';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

function log(eventName, e) {
  console.log(eventName, e.nativeEvent);
}

class MarkerTypes extends Component {
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
      }
    };
  }

  render() {
    return (
      <View style={cStyles.container}>
        <MapView
          provider={this.props.provider}
          style={cStyles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
        >
          <MapView.Marker
            coordinate={this.state.a}
            onSelect={e => log('onSelect', e)}
            onDrag={e => log('onDrag', e)}
            onDragStart={e => log('onDragStart', e)}
            onDragEnd={e => log('onDragEnd', e)}
            onPress={e => log('onPress', e)}
            draggable
          >
            <PriceMarker amount={99} />
          </MapView.Marker>

          <MapView.Marker
            coordinate={this.state.b}
            onSelect={e => log('onSelect', e)}
            onDrag={e => log('onDrag', e)}
            onDragStart={e => log('onDragStart', e)}
            onDragEnd={e => log('onDragEnd', e)}
            onPress={e => log('onPress', e)}
            draggable
          />
        </MapView>
      </View>
    );
  }
}

MarkerTypes.propTypes = {
  provider: MapView.ProviderPropType
};

export default MarkerTypes;


