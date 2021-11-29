import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Switch,
} from 'react-native';

export default function AlarmList() {
  const [switching, setSwitching] = useState(false);

  return (
    <TouchableOpacity style={styles.alarmListItem}>
      <View style={styles.alarmInner}>
        <Text style={styles.alarmListItemTime}>
          0:00
        </Text>
        <Text style={styles.alarmListItemTitle}>
          アラーム名
        </Text>
      </View>
      <View>
        <Switch
          onValueChange={(value) => setSwitching(value)}
          value={switching}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  alarmInner: {
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
  },
});
