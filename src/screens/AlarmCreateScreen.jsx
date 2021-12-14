import React, { useState, useCallback } from 'react';
// import Sound from 'react-native-sound';
import {
  View, StyleSheet, Text, TextInput, Alert, TouchableOpacity,
} from 'react-native';
// import AlarmSetting from '../components/AlarmSetting';

export default function AlarmCreateScreen() {
  const [time, setTime] = useState();
  const [count, setCount] = useState(0);

  const handlePress = useCallback(() => {
    setInterval(() => {
      setCount(() => count + 1);
      console.log(count);
      if (`${count}` === `${time}`) {
        Alert.alert(`${count}`);
        clearInterval(handlePress);
      }
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.timeInner}>
        <Text style={styles.time}>時間</Text>
        <View style={styles.timeSelection}>
          <TextInput
            value={time}
            style={styles.timeSelectionInner}
            onChangeText={(text) => { setTime(text); }}
          />
          <TouchableOpacity
            onPress={() => handlePress(count)}
          >
            <Text style={styles.text}>start</Text>
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
