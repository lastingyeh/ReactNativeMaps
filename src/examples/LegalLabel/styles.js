import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export { LATITUDE, LONGITUDE, LATITUDE_DELTA, LONGITUDE_DELTA };

const padding = 10;
const photoSize = 80;
const mapHeight = height - 130;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    height: mapHeight
  },
  username: {
    paddingLeft: photoSize + padding * 2,
    paddingTop: padding
  },
  usernameText: {
    fontSize: 36,
    lineHeight: 36,
    color: 'blue',
    textDecorationLine: 'underline'
  },
  bio: {
    marginHorizontal: padding,
    marginBottom: 0,
    paddingVertical: padding / 2
  },
  bioText: {
    fontSize: 16,
    lineHeight: 16 * 1.5
  },
  photo: {
    padding: 2,
    position: 'absolute',
    top: mapHeight - photoSize / 2,
    left: padding,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc',
    width: photoSize,
    height: photoSize
  },
  photoInner: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  photoText: {
    fontSize: 9,
    textAlign: 'center'
  }
});

export default styles;
