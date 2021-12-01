import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import AlarmSetting from '../components/AlarmSetting';
import AlarmRepeat from '../components/AlarmRepeat';

export default function AlarmCreateScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.timeInner}>
        <Text style={styles.time}>時間</Text>
        <View style={styles.timeSelection}>
          <Text style={styles.timeSelectionInner}>12:00</Text>
        </View>
      </View>
      <AlarmRepeat />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201F1F',
  },
  Alarm: {
    flexDirection: 'column',
  },
  timeInner: {
    backgroundColor: '#201F1F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 43,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
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
    borderRadius: 10,
  },
  timeSelectionInner: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    lineHeight: 32,
    fontSize: 22,
    color: '#FFFFFF',
  },
});