import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, Text,
} from 'react-native';

export default function AlarmLabel() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.labelInner}>
        <View>
          <Text style={styles.label}>ラベル</Text>
        </View>
        <View>
          <Text style={styles.labelSettingInner}>アラーム</Text>
        </View>
        <View>
          <Text style={styles.labelButton}>＞</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelInner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 19,
    backgroundColor: '#2F2F2F',
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  label: {
    fontSize: 14,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  labelSettingInner: {
    fontSize: 14,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.54)',
    marginRight: 11,
    marginLeft: 261,
  },
  labelButton: {
    marginRight: 19,
    color: 'rgba(255, 255, 255, 0.54)',
    fontSize: 10,
  },
});
