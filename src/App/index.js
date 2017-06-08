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
        [AnimatedViews, 'Animating with MapViews']
      ]
        .filter(ex => ANDROID || (IOS && (ex[2] || !this.state.useGoogleMaps)))
        .map(makeExampleMapper(IOS && this.state.useGoogleMaps))
    );
  }
}

export default App;
