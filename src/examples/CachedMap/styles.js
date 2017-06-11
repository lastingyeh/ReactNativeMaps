import { StyleSheet, Dimensions } from 'react-native';

const HORIZONTAL_PADDING = 12;
const VERTICAL_PADDING = 6;

const { width, height } = Dimensions.get('window');

export { width, height, HORIZONTAL_PADDING, VERTICAL_PADDING };

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: 'white',
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingVertical: VERTICAL_PADDING
  },
  buttonText: {
    color: 'white'
  },
  bubble: {
    backgroundColor: 'rgba(0,128,255,1.0)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  button: {
    width: 100,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end'
  }
});

export default styles;
