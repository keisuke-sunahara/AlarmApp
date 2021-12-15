import React, { useCallback, useRef } from 'react';
// import Sound from 'react-native-sound';
import {
  View, StyleSheet, Text, TextInput, Alert, TouchableOpacity,
} from 'react-native';
// import AlarmSetting from '../components/AlarmSetting';

export default function AlarmCreateScreen() {
  const inputVal = useRef(null);
  const inputCount = useRef(null);
  const start = useCallback(() => {
    let count = 0;
    inputVal.current = setInterval(() => {
      count += 1;
      console.log(count);
      if (`${count}` === `${inputCount.current}`) {
        Alert.alert(`${count}`);
        clearInterval(inputVal.current);
      }
    }, 1000);
  }, []);

  const stop = useCallback(() => {
    clearInterval(inputVal.current);
    inputVal.current = null;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.timeInner}>
        <Text style={styles.time}>時間</Text>
        <View style={styles.timeSelection}>
          <TextInput
            value={inputVal.current}
            style={styles.timeSelectionInner}
            onChangeText={(text) => { inputCount.current = text; }}
          />
          <TouchableOpacity
            onPress={start}
          >
            <Text style={styles.text}>start</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={stop}
          >
            <Text style={styles.text}>stop</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201F1F',
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
  text: {
    color: '#FFFFFF',
  },
});
