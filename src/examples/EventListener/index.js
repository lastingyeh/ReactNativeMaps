import React, { Component, PropTypes } from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';

// modify path for getting SyntheticEvent Object...
import SyntheticEvent from 'react-native/Libraries/Renderer/src/renderers/shared/shared/event/SyntheticEvent';
import MapView from 'react-native-maps';

import Event from '../Event';
import PriceMarker from '../PriceMarker';

import cStyles from '../../utils/styles';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

let id = 0;

class EventListener extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      events: []
    };
  }

  makeEvent(e, name) {
    return {
      id: id++,
      name,
      data: e.nativeEvent ? e.nativeEvent : e
    };
  }

  recordEvent(name) {
    return e => {
      if (e instanceof SyntheticEvent && typeof e.persist === 'function') {
        e.persist();
      }

      this.setState(prevState => ({
        events: [this.makeEvent(e, name), ...prevState.events.slice(0, 10)]
      }));
    };
  }

  render() {
    return (
      <View style={cStyles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
          onRegionChange={this.recordEvent('Map::onRegionChange')}
          onRegionChangeComplete={this.recordEvent(
            'Map::onRegionChangeComplete'
          )}
          onPress={this.recordEvent('Map::onPress')}
          onPanDrag={this.recordEvent('Map::onPanDrag')}
          onLongPress={this.recordEvent('Map::onLongPress')}
          onMarkerPress={this.recordEvent('Map::onMarkerPress')}
          onMarkerSelect={this.recordEvent('Map::onMarkerSelect')}
          onMarkerDeselect={this.recordEvent('Map::onMarkerDeselect')}
          onCalloutPress={this.recordEvent('Map::onCalloutPress')}
        >
          <MapView.Marker
            coordinate={{
              latitude: LATITUDE + LATITUDE_DELTA / 2,
              longitude: LONGITUDE + LONGITUDE_DELTA / 2
            }}
          />
          <MapView.Marker
            coordinate={{
              latitude: LATITUDE - LATITUDE_DELTA / 2,
              longitude: LONGITUDE - LONGITUDE_DELTA / 2
            }}
          />
          <MapView.Marker
            title="This is a title"
            description="This is a description"
            coordinate={this.state.region}
            onPress={this.recordEvent('Marker::onPress')}
            onSelect={this.recordEvent('Marker:onSelect')}
            onDeselect={this.recordEvent('Marker::onDeselect')}
            onCalloutPress={this.recordEvent('Marker::onCalloutPress')}
          >
            <PriceMarker amount={99} />
            <MapView.Callout
              style={styles.callout}
              onPress={this.recordEvent('Callout::onPress')}
            >
              <View>
                <Text>Well hello there...</Text>
              </View>
            </MapView.Callout>
          </MapView.Marker>
          <MapView.Polygon
            fillColor={'rgba(255,0,0,0.3)'}
            onPress={this.recordEvent('Polygon::onPress')}
            tappable
            coordinates={[
              {
                latitude: LATITUDE + LATITUDE_DELTA / 5,
                longitude: LONGITUDE + LONGITUDE_DELTA / 4
              },
              {
                latitude: LATITUDE + LATITUDE_DELTA / 3,
                longitude: LONGITUDE + LONGITUDE_DELTA / 4
              },
              {
                latitude: LATITUDE + LATITUDE_DELTA / 4,
                longitude: LONGITUDE + LONGITUDE_DELTA / 2
              }
            ]}
          />
          <MapView.Polyline
            strokeColor={'rgba(255,0,0,1)'}
            onrPress={this.recordEvent('Polyline::onPress')}
            tappable
            coordinates={[
              {
                latitude: LATITUDE + LATITUDE_DELTA / 5,
                longitude: LONGITUDE - LONGITUDE_DELTA / 4
              },
              {
                latitude: LATITUDE + LATITUDE_DELTA / 3,
                longitude: LONGITUDE - LONGITUDE_DELTA / 4
              },
              {
                latitude: LATITUDE + LATITUDE_DELTA / 4,
                longitude: LONGITUDE - LONGITUDE_DELTA / 2
              }
            ]}
          />
        </MapView>
        <View style={styles.eventList}>
          <ScrollView>
            {this.state.events.map(event =>
              <Event key={event.id} event={event} />
            )}
          </ScrollView>
        </View>
      </View>
    );
  }
}

EventListener.propTypes = {
  provider: MapView.ProviderPropType
};

export default EventListener;
