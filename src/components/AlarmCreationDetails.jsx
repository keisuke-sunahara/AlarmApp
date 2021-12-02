import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

export default function AlarmCreationDetails() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={repeatStyles.repeatInner}>
        <View>
          <Text style={repeatStyles.repeat}>繰り返し</Text>
        </View>
        <View>
          <Text style={repeatStyles.repeatSelectionInner}>しない</Text>
        </View>
        <View>
          <Text style={repeatStyles.repeatButton}>＞</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={labelStyles.labelInner}>
        <View>
          <Text style={labelStyles.label}>ラベル</Text>
        </View>
        <View>
          <Text style={labelStyles.labelSettingInner}>アラーム</Text>
        </View>
        <View>
          <Text style={labelStyles.labelButton}>＞</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={telephoneStyles.telephoneInner}>
        <View>
          <Text style={telephoneStyles.telephone}>電話番号</Text>
        </View>
        <View>
          <Text style={telephoneStyles.telephoneSettingInner}>しない</Text>
        </View>
        <View>
          <Text style={telephoneStyles.telephoneButton}>＞</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={timeSettingStyles.timeInner}>
        <View>
          <Text style={timeSettingStyles.time}>何分後にかける？</Text>
        </View>
        <View>
          <Text style={timeSettingStyles.timeSettingInner}>1分後</Text>
        </View>
        <View>
          <Text style={timeSettingStyles.timeButton}>＞</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const repeatStyles = StyleSheet.create({
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

const labelStyles = StyleSheet.create({
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

const telephoneStyles = StyleSheet.create({
  telephoneInner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 19,
    backgroundColor: '#2F2F2F',
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  telephone: {
    fontSize: 14,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  telephoneSettingInner: {
    fontSize: 14,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.54)',
    marginRight: 11,
    marginLeft: 261,
  },
  telephoneButton: {
    marginRight: 19,
    color: 'rgba(255, 255, 255, 0.54)',
    fontSize: 10,
  },
});

const timeSettingStyles = StyleSheet.create({
  timeInner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 19,
    backgroundColor: '#2F2F2F',
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  time: {
    fontSize: 14,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  timeSettingInner: {
    fontSize: 14,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.54)',
    marginLeft: 214,
  },
  timeButton: {
    color: 'rgba(255, 255, 255, 0.54)',
    marginLeft: 11,
    fontSize: 10,
  },
});
