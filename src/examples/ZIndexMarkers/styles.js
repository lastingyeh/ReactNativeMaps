import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.733858;
const LONGITUDE = -122.446549;
const MARKERS_LATITUDE_DELTA = 0.03;
const MARKERS_LONGITUDE_DELTA = MARKERS_LATITUDE_DELTA * ASPECT_RATIO;
const MAP_LATITUDE_DELTA = 0.3;
const MAP_LONGITUDE_DELTA = MAP_LATITUDE_DELTA * ASPECT_RATIO;
const NUM_MARKERS = 100;
const PERCENT_SPECIAL_MARKERS = 0.1;

export {
  LATITUDE,
  LONGITUDE,
  MAP_LATITUDE_DELTA,
  MAP_LONGITUDE_DELTA,
  MARKERS_LONGITUDE_DELTA,
  MARKERS_LATITUDE_DELTA,
  NUM_MARKERS,
  PERCENT_SPECIAL_MARKERS
};

const styles = StyleSheet.create({
  specialMarker: {
    zIndex: 1
  },
  textContainer: {
    backgroundColor: 'white',
    borderRadius: 4,
    marginHorizontal: 40,
    marginVertical: 20,
    padding: 10
  }
});

export default styles;
