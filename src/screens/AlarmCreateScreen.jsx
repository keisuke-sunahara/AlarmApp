import React, { useCallback, useRef } from 'react';
// import Sound from 'react-native-sound';
// import { TimePicker } from 'react-native-simple-time-picker';

import {
  View, StyleSheet, Text, Alert, TouchableOpacity, TextInput, Linking,
} from 'react-native';
// import AlarmSetting from '../components/AlarmSetting';

export default function AlarmCreateScreen() {
  const inputVal = useRef(null);
  const leftHours = useRef(null);
  const rightMinutes = useRef(null);
  const tell = '08060388517';
  const start = useCallback(() => {
    inputVal.current = setInterval(() => {
      const nowHours = new Date().getHours().toLocaleString();
      let nowMinutes = new Date().getMinutes().toLocaleString();
      if (nowMinutes.length === 1) {
        nowMinutes = 0 + nowMinutes;
      }
      if (`${leftHours.current}` === `${nowHours}`) {
        console.log(nowMinutes);
        if (`${rightMinutes.current}` === `${nowMinutes}`) {
          Alert.alert('成功');
          clearInterval(inputVal.current);
        }
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

        <View
          style={styles.textInput}
        >
          <TextInput
            style={styles.leftHoursInner}
            keyboardType="number-pad"
            value={leftHours.current}
            onChangeText={(text) => { leftHours.current = text; }}
            maxLength={2}
          />
          <View style={styles.semicolon}>
            <Text style={styles.semicolonInner}>:</Text>
          </View>
          <TextInput
            style={styles.rightMinutesInner}
            keyboardType="number-pad"
            value={rightMinutes.current}
            onChangeText={(text) => { rightMinutes.current = text; }}
            maxLength={2}
          />
        </View>

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
      <TouchableOpacity
        class="submit"
        style={styles.tell}
        onPress={() => {
          const phoneNumber = `tel:${tell}`;
          Linking.openURL(phoneNumber);
        }}
      >
        <Text>TELL</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201F1F',
  },
  timeInner: {
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
  textInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2F2F2F',
    borderRadius: 10,
    width: 71,
    height: 36,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  text: {
    color: '#FFFFFF',
  },
  leftHoursInner: {
    width: 25,
    lineHeight: 25,
    fontSize: 20,
    color: '#FFFFFF',
  },
  rightMinutesInner: {
    width: 25,
    lineHeight: 25,
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'right',
  },
  semicolon: {
    height: 31,
    width: 7,

  },
  semicolonInner: {
    lineHeight: 32,
    fontSize: 20,
    color: '#FFFFFF',
  },
  tell: {
    fontSize: 16,
    lineHeight: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
