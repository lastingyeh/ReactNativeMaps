import { StyleSheet, Dimensions } from 'react-native';

export const screen = Dimensions.get('window');

export const ASPECT_RATIO = screen.width / screen.height;
export const LATITUDE = 37.78825;
export const LONGITUDE = -122.4324;
export const LATITUDE_DELTA = 0.0922;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const ITEM_SPACING = 10;
export const ITEM_PREVIEW = 10;
export const ITEM_WIDTH = screen.width - 2 * ITEM_SPACING - 2 * ITEM_PREVIEW;
export const SNAP_WIDTH = ITEM_WIDTH + ITEM_SPACING;
export const ITEM_PREVIEW_HEIGHT = 150;
export const SCALE_END = screen.width / ITEM_WIDTH;
export const BREAKPOINT1 = 246;
export const BREAKPOINT2 = 350;

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  itemContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    paddingHorizontal: ITEM_SPACING / 2 + ITEM_PREVIEW,
    position: 'absolute',
    paddingTop: screen.height - ITEM_PREVIEW_HEIGHT - 64
  },
  map: {
    backgroundColor: 'transparent',
    ...StyleSheet.absoluteFillObject
  },
  item: {
    width: ITEM_WIDTH,
    height: screen.height + 2 * ITEM_PREVIEW_HEIGHT,
    backgroundColor: 'red',
    marginHorizontal: ITEM_SPACING / 2,
    overflow: 'hidden',
    borderRadius: 3,
    borderColor: '#000'
  }
});
