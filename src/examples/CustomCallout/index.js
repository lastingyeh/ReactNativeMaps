import React, { PropTypes } from 'react';
import { View } from 'react-native';
import styles from './styles';

const propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
};

const CustomCallout = ({ children, style = null }) =>
  <View style={[styles.container, style]}>
    <View style={styles.bubble}>
      <View style={styles.amount}>
        {children}
      </View>
    </View>
    <View style={styles.arrowBorder} />
    <View style={styles.arrow} />
  </View>;

CustomCallout.propTypes = propTypes;

export default CustomCallout;
