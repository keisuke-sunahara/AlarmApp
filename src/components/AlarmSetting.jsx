import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function AlarmSetting() {
  return (
    <View style={styles.container}>
      <View style={styles.timeInner}>
        <Text style={styles.time}>時間</Text>
        <View style={styles.timeSelection}>
          <Text style={styles.timeSelectionInner}>12:00</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timeInner: {
    backgroundColor: '#201F1F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 43,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.07)',
  },
  time: {
    fontSize: 16,
    lineHeight: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  timeSelection: {
    backgroundColor: '#2F2F2F',
    height: 36,
  },
  timeSelectionInner: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    lineHeight: 32,
    fontSize: 22,
    color: '#FFFFFF',
  },
});
