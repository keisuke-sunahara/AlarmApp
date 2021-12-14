import React, { useEffect, useState } from 'react';
import Sound from 'react-native-sound';
import {
  View, StyleSheet, Text, TextInput, Button,
} from 'react-native';

export default function AlarmSetting() {
  const [time, setTime] = useState();
  const count = 0;
  const handlePress = setInterval(() => {
    count+++
    if ( count === time ) {
      this.sound = new Sound(['<iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/jp/album/%E6%9C%AC%E5%BD%93%E6%9C%AC%E6%B0%97/1147516278?i=1147516289"></iframe>'], 
      Sound.MAIN_BUNDLE, error => {
        if ( error ) {
          console.log("failed to load the sound.", error);
        }
      });
    }
  },1000);
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
          <Button
            label="Submit"
            onPress={handlePress}
          />
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
