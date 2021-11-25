import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function AlarmList() {
  return (
    <TouchableOpacity style={StyleSheet.container}>
      <View style={StyleSheet.alarmListItem}>
        <Text style={StyleSheet.alarmListItemTime}>
          0:00  
        </Text>
        <Text style={StyleSheet.alarmListItemTitle}>
          アラーム名
        </Text>
      </View>
      <View>
        <TouchableOpacity>

        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  alarmListItem: {
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 0.7,
    borderColor: 'rgba(0, 0, 0, 0.25)',
  },
  alarmListItemTime: {
    fontSize: 32,
    lineHeight: 40,
    color: '#979797',
  },
  alarmListItemTitle: {
    fontSize: 8,
    lineHeight: 16,
    color: '#979797',
  }
})