import React, { PropTypes } from 'react';
import { Text, Animated } from 'react-native';
import styles from './styles';

class AnimatedPriceMarker extends React.Component {
  render() {
    const { amount, selected, style } = this.props;

    const background = selected.interpolate({
      inputRange: [0, 1],
      outputRange: ['#FF5A5F', '#4da2ab']
    });

    const border = selected.interpolate({
      inputRange: [0, 1],
      outputRange: ['#D23F44', '#007a87']
    });

    return (
      <Animated.View style={[styles.container, style]}>
        <Animated.View
          style={[
            styles.bubble,
            {
              backgroundColor: background,
              borderColor: border
            }
          ]}
        >
          <Text style={styles.dollar}>$</Text>
          <Text style={styles.amount}>{amount}</Text>
        </Animated.View>
        <Animated.View
          style={[styles.arrowBorder, { borderTopColor: border }]}
        />
        <Animated.View style={[styles.arrow, { borderTopColor: background }]} />
      </Animated.View>
    );
  }
}

AnimatedPriceMarker.propTypes = {
  amount: PropTypes.number.isRequired,
  selected: PropTypes.object.isRequired,
  style: PropTypes.any
};

export default AnimatedPriceMarker;
