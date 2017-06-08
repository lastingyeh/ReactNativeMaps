import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const PriceMarker = ({ amount, fontSize }) =>
  <View style={styles.container}>
    <View style={styles.bubble}>
      <Text style={styles.dollar}>$</Text>
      <Text style={[styles.amount, { fontSize }]}>{amount}</Text>
    </View>
    <View style={styles.arrowBorder} />
    <View style={styles.arrow} />
  </View>;

PriceMarker.defaultProps = {
  fontSize: 13
};

PriceMarker.propTypes = {
  amount: PropTypes.number.isRequired,
  fontSize: PropTypes.number
};

export default PriceMarker;
