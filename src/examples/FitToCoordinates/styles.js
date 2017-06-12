import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;
const DEFAULT_PADDING = { top: 40, right: 40, bottom: 40, left: 40 };

export {
  LATITUDE,
  LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  SPACE,
  DEFAULT_PADDING
};

const styles = StyleSheet.create({});

export default styles;
