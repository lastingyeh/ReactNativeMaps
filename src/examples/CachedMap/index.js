import React, { Component } from 'react';
import { View, Text, ListView, TouchableOpacity } from 'react-native';

import MapView from 'react-native-maps';

import styles, {
  width,
  height,
  HORIZONTAL_PADDING,
  VERTICAL_PADDING
} from './styles';

import { COUNTRIES } from './data';

const flagImg = require('../../utils/assets/flag-blue.png');

class CachedMap extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(COUNTRIES),
      cache: true
    };
  }

  toggleCache = () => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([])
    });
    this.setState({
      cache: !this.state.cache,
      dataSource: this.state.dataSource.cloneWithRows(COUNTRIES)
    });
  };

  render() {
    const mapSize = width - HORIZONTAL_PADDING * 2;
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.toggleCache()}
            style={[styles.bubble, styles.button]}
          >
            <Text style={styles.buttonText}>
              {this.state.cache ? 'Cache' : 'Not cached'}
            </Text>
          </TouchableOpacity>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={region =>
            <View style={styles.item}>
              <Text>{region.name}</Text>
              <MapView
                provider={this.props.provider}
                style={{ width: mapSize, height: mapSize }}
                initialRegion={region}
                cacheEnabled={this.state.cache}
                zoomEnabled
                scrollingEnabled
                loadingIndicatorColor="#666666"
                loadingBackgroundColor="#eeeeee"
              >
                <MapView.Marker
                  coordinate={region}
                  centerOffset={{ x: -18, y: -60 }}
                  anchor={{ x: 0.69, y: 1 }}
                  image={flagImg}
                />
              </MapView>
              <View style={styles.divider} />
            </View>}
        />
      </View>
    );
  }
}

CachedMap.propTypes = {
  provider: MapView.ProviderPropType
};

export default CachedMap;
