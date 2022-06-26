import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

/**
 * 設備狀態項目
 * TODO:
 *     1. 實作各個設備狀態統計項目內容及其長按後對應的操作事件
 *     2. 【進階實作範圍】實作點擊設備狀態統計項目顯示對應狀態的設備清單
 * Tip:
 *     1. 可多善用參數傳遞的技巧，判斷設備狀態統計項目文字是否加入不同的顯示樣式
 *     2. 【進階實作範圍】可多善用條件運算式的技巧，判斷是否加入樣式設定
 */
const StatusItem = (props) => {
  /**
   * TODO: 此處僅為提供設備顯示狀態項目而撰寫的範例，請自行實作產生每個設備顯示狀態項目
   */
  return (
    <View style={styles.statusItem}>
      <Text>設備狀態</Text>
      <Text style={styles.count}>0</Text>
      <Text style={styles.tip}>（提示文字）</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statusItem: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: 110,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 5,
    elevation: 10,
  },
  count: {
    fontSize: 30,
    fontWeight: '600',
  },
  tip: {
    fontSize: 10,
    color: '#C0C0C0',
    alignSelf: 'center',
  },
});

export default StatusItem;
