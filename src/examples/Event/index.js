import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from './styles';

class Event extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.event.id !== nextProps.event.id;
  }

  render() {
    const { event } = this.props;
    return (
      <View style={styles.event}>
        <Text style={styles.eventName}>{event.name}</Text>
        <Text style={styles.eventData}>
          {JSON.stringify(event.data, null, 2)}
        </Text>
      </View>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object
};

export default Event;
