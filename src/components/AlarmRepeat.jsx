import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

export default function AlarmRepeat() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.repeatInner}>
        <View>
          <Text style={styles.repeat}>繰り返し</Text>
        </View>
        <View>
          <Text style={styles.repeatSelectionInner}>しない</Text>
        </View>
        <View>
          <Text style={styles.repeatButton}>＞</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  repeatInner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 19,
    backgroundColor: '#2F2F2F',
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  repeat: {
    fontSize: 14,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  repeatSelection: {
  },
  repeatSelectionInner: {
    fontSize: 14,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.54)',
    marginRight: 11,
    marginLeft: 261,
  },
  repeatButton: {
    marginRight: 19,
    color: 'rgba(255, 255, 255, 0.54)',
    fontSize: 10,
  },
});
