import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import MapView from 'react-native-maps';

import cStyles from '../../utils/styles';
import styles, {
  LATITUDE,
  LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA
} from './styles';

class StaticMap extends Component {
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

  render() {
    return (
      <View style={cStyles.container}>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollview}
        >

          <Text>Clicking</Text>
          <Text>and</Text>
          <Text>dragging</Text>
          <Text>the</Text>
          <Text>map</Text>
          <Text>will</Text>
          <Text>cause</Text>
          <Text>the</Text>

          <MapView
            provider={this.props.provider}
            style={styles.map}
            scrollEnabled={false}
            zoomEnabled={false}
            pitchEnabled={false}
            rotateEnabled={false}
            initialRegion={this.state.region}
          >
            <MapView.Marker
              title="This is a description"
              coordinate={this.state.region}
            />
          </MapView>
          <Text>parent</Text>
          <Text>ScrollView</Text>
          <Text>to</Text>
          <Text>scroll.</Text>
          <Text>When</Text>
          <Text>using</Text>
          <Text>a Google</Text>
          <Text>Map</Text>
          <Text>this only</Text>
          <Text>works</Text>
          <Text>if you</Text>
          <Text>disable:</Text>
          <Text>scroll,</Text>
          <Text>zoom,</Text>
          <Text>pitch,</Text>
          <Text>rotate.</Text>
          <Text>...</Text>
          <Text>It</Text>
          <Text>would</Text>
          <Text>be</Text>
          <Text>nice</Text>
          <Text>to</Text>
          <Text>have</Text>
          <Text>an</Text>
          <Text>option</Text>
          <Text>that</Text>
          <Text>still</Text>
          <Text>allows</Text>
          <Text>zooming.</Text>
        </ScrollView>
      </View>
    );
  }
}

StaticMap.propTypes = {
  provider: MapView.ProviderPropType
};

export default StaticMap;
