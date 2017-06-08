import React, { Component } from 'react';
import { View, Text, Dimensions, Button } from 'react-native';

import MapView from 'react-native-maps';

import cStyles from '../../utils/styles';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

class PolylineCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      polylines: [],
      editing: null
    };
  }

  finish() {
    const { polylines, editing } = this.state;
    this.setState({
      polylines: [...polylines, editing],
      editing: null
    });
  }

  onPanDrag(e) {
    const { editing } = this.state;
    if (!editing) {
      this.setState({
        editing: {
          id: id++,
          coordinates: [e.nativeEvent.coordinate]
        }
      });
    } else {
      this.setState({
        editing: {
          ...editing,
          coordinates: [...editing.coordinates, e.nativeEvent.coordinate]
        }
      });
    }
  }

  render() {
    return (
      <View style={cStyles.container}>
        <MapView
          provider={this.props.provider}
          style={cStyles.map}
          initialRegion={this.state.region}
          scrollEnabled={false}
          onPanDrag={e => this.onPanDrag(e)}
        >
          {this.state.polylines.map(polyline =>
            <MapView.Polyline
              key={polyline.id}
              coordinates={polyline.coordinates}
              strokeColor="#000"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={1}
            />
          )}
          {this.state.editing &&
            <MapView.Polygon
              key="editingPolyline"
              coordinates={this.state.editing.coordinates}
              strokeColor="#F00"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={1}
            />}
        </MapView>
        <View style={cStyles.buttonContainer}>
          {this.state.editing &&
            <Button
              onPress={() => this.finish()}
              style={[cStyles.bubble, cStyles.button]}
              title="Finish"
            />}
        </View>
      </View>
    );
  }
}

PolylineCreator.propTypes = {
  provider: MapView.ProviderPropType
};

export default PolylineCreator;
