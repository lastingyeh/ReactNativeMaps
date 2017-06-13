import React, { Component } from 'react';
import {
  Platform,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  Switch
} from 'react-native';

import { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';

import DisplayLatLng from '../examples/DisplayLatLng';
import ViewsAsMarkers from '../examples/ViewsAsMarkers';
import EventListener from '../examples/EventListener';
import MarkerTypes from '../examples/MarkerTypes';
import DraggableMarkers from '../examples/DraggableMarkers';
import PolygonCreator from '../examples/PolygonCreator';
import PolylineCreator from '../examples/PolylineCreator';
import AnimatedViews from '../examples/AnimatedViews';
import AnimatedMarkers from '../examples/AnimatedMarkers';
import Callouts from '../examples/Callouts';
import Overlays from '../examples/Overlays';
import DefaultMarkers from '../examples/DefaultMarkers';
import CustomMarkers from '../examples/CustomMarkers';
import CachedMap from '../examples/CachedMap';
import LoadingMap from '../examples/LoadingMap';
import TakeSnapshot from '../examples/TakeSnapshot';
import FitToSuppliedMarkers from '../examples/FitToSuppliedMarkers';
import FitToCoordinates from '../examples/FitToCoordinates';
import LiteMapView from '../examples/LiteMapView';
import CustomTiles from '../examples/CustomTiles';
import ZIndexMarkers from '../examples/ZIndexMarkers';
import StaticMap from '../examples/StaticMap';
import MapStyle from '../examples/MapStyle';
import LegalLabel from '../examples/LegalLabel';

import styles from './styles';
import cStyles from '../utils/styles';

const IOS = Platform.OS === 'ios';
const ANDROID = Platform.OS === 'android';

makeExampleMapper = useGoogleMaps => {
  // Remove all falsy values from an array
  // [].fiter(Boolean)
  // ex. (n !== undefined && n !== null && n !== false && n !== 0 && n !== "" && isNaN()!=NaN)

  if (useGoogleMaps) {
    return ex => [ex[0], [ex[1], ex[3]].filter(Boolean).join(' ')];
  }
  return ex => ex;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Component: null,
      useGoogleMaps: ANDROID
    };
  }

  renderExample = ([Component, title]) => {
    return (
      <TouchableHighlight
        key={title}
        style={styles.button}
        onPress={() =>
          this.setState({
            Component
          })}
      >
        <Text>{title}</Text>
      </TouchableHighlight>
    );
  };

  renderBackButton = () => {
    return (
      <TouchableHighlight
        style={styles.back}
        onPress={() => this.setState({ Component: null })}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>&larr;</Text>
      </TouchableHighlight>
    );
  };

  renderGoogleSwitch = () => {
    return (
      <View>
        <Text>Use GoogleMaps</Text>
        <Switch
          onValueChange={value => this.setState({ useGoogleMaps: value })}
          style={{ marginBottom: 10 }}
          value={this.state.useGoogleMaps}
        />
      </View>
    );
  };

  renderExamples = examples => {
    const { Component, useGoogleMaps } = this.state;
    return (
      <View style={cStyles.container}>
        {Component &&
          <Component
            provider={useGoogleMaps ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
          />}
        {Component && this.renderBackButton()}
        {!Component &&
          <ScrollView
            style={StyleSheet.absoluteFill}
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            {IOS && this.renderGoogleSwitch()}
            {examples.map(ex => this.renderExample(ex))}
          </ScrollView>}
      </View>
    );
  };

  render() {
    return this.renderExamples(
      [
        [DisplayLatLng, 'Tracking Position', true, '(incomplete)'],
        [ViewsAsMarkers, 'Arbitrary Views as Markers', true],
        [EventListener, 'Events', true, '(incomplete)'],
        [MarkerTypes, 'Image Based Markers', true],
        [DraggableMarkers, 'Draggable Markers', true],
        [PolygonCreator, 'Polygon Creator', true],
        [PolylineCreator, 'Polyline Creator', true],
        [AnimatedViews, 'Animating with MapViews'],
        [AnimatedMarkers, 'Animated Marker Position'],
        [Callouts, 'Custom Callouts', true],
        [Overlays, 'Circles, Polygons, and Polylines', true],
        [DefaultMarkers, 'Default Markers', true],
        [CustomMarkers, 'Custom Markers', true],
        [CachedMap, 'Cached Map'],
        [LoadingMap, 'Map with loading'],
        [TakeSnapshot, 'Take Snapshot', true, '(incomplete)'],
        [FitToSuppliedMarkers, 'Focus Map On Markers', true],
        [FitToCoordinates, 'Fit Map To Coordinates', true],
        [LiteMapView, 'Android Lite MapView'],
        [CustomTiles, 'Custom Tiles', true],
        [ZIndexMarkers, 'Position Markers with Z-index', true],
        [StaticMap, 'StaticMap', true],
        [MapStyle, 'Customize the style of the map', true],
        [LegalLabel, 'Reposition the legal label', true]
      ]
        .filter(ex => ANDROID || (IOS && (ex[2] || !this.state.useGoogleMaps)))
        .map(makeExampleMapper(IOS && this.state.useGoogleMaps))
    );
  }
}

export default App;
