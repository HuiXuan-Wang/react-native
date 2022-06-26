import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import blubImg from './images/bulb.png';

/**
 * 設備項目
 * TODO: 實作設備項目內容及其點擊觸發的對應操作事件
 * Tip:
 *     1. 可多善用條件運算式的技巧，判斷設備狀態文字是否加入樣式設定
 */
const DeviceItem = props => {
  const {devices} = props;
  /**
   * TODO: 此處僅為提供顯示設備項目而撰寫的範例，請自行實作產生每個設備項目
   */
  return (
    <View style={styles.deviceItem}>
      <Image source={props.icon} style={styles.deviceImg} />
      <Text style={styles.deviceName}>{props.name}</Text>
      <View style={styles.deviceStatus}>
        <View style={styles.light} />
        <Text style={styles.lightText}>{props.isOpened}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deviceItem: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 10,
    elevation: 10,
  },
  deviceImg: {
    width: 30,
    height: 30,
  },
  deviceName: {
    fontWeight: '600',
    marginTop: 10,
  },
  deviceStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  light: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'gray',
  },
  lightText: {
    fontSize: 12,
    paddingLeft: 5,
  },
});

export default DeviceItem;
