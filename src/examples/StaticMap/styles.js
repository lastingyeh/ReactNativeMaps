import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export { LATITUDE, LONGITUDE, LATITUDE_DELTA, LONGITUDE_DELTA };

const styles = StyleSheet.create({
  scrollContainer: StyleSheet.absoluteFillObject,
  scrollview: {
    alignItems: 'center',
    paddingVertical: 40
  },
  map: {
    width: 250,
    height: 250
  }
});

export default styles;
